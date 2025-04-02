import { toPng } from 'html-to-image';
import QRCode from 'qrcode';
import { TraitType } from '../data/questions';
import { traitDescriptions } from '../data/traitDescriptions';

const traitOrder: TraitType[] = [
  'callousness',
  'grandiosity',
  'aggressiveness',
  'suspicion',
  'manipulativeness',
  'dominance',
  'riskTaking'
];

export const generateShareImage = async (
  scores: Record<TraitType, number>,
  traits: Record<TraitType, Record<string, string>>,
  language: string,
  chartRef: HTMLDivElement | null
) => {
  if (!chartRef) return null;

  // Create a temporary container
  const container = document.createElement('div');
  container.style.width = '1080px';
  container.style.height = '1920px';
  container.style.backgroundColor = 'white';
  container.style.padding = '40px';
  container.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

  // Add title
  const title = document.createElement('h1');
  title.style.fontSize = '48px';
  title.style.fontWeight = 'bold';
  title.style.textAlign = 'center';
  title.style.marginBottom = '24px';
  title.innerHTML = '🧠 Personality Test Results';
  container.appendChild(title);

  // Find highest trait
  const highestTrait = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
  const traitKey = highestTrait[0] as TraitType;
  const traitScore = highestTrait[1];

  // Add primary trait section
  const primaryTrait = document.createElement('div');
  primaryTrait.style.backgroundColor = '#f0f9ff';
  primaryTrait.style.borderRadius = '16px';
  primaryTrait.style.padding = '24px';
  primaryTrait.style.marginBottom = '32px';

  const primaryTitle = document.createElement('h2');
  primaryTitle.style.fontSize = '24px';
  primaryTitle.style.fontWeight = 'bold';
  primaryTitle.style.color = '#0369a1';
  primaryTitle.style.marginBottom = '16px';
  primaryTitle.textContent = `Primary Trait: ${traits[traitKey][language]} (${traitScore}/5)`;
  primaryTrait.appendChild(primaryTitle);

  const description = document.createElement('p');
  description.style.fontSize = '18px';
  description.style.lineHeight = '1.6';
  description.style.color = '#334155';
  description.textContent = traitDescriptions[language][traitKey].description;
  primaryTrait.appendChild(description);

  container.appendChild(primaryTrait);

  // Add chart
  const chartContainer = document.createElement('div');
  chartContainer.style.width = '800px';
  chartContainer.style.height = '800px';
  chartContainer.style.margin = '32px auto';
  
  const chartClone = chartRef.cloneNode(true) as HTMLDivElement;
  chartClone.style.width = '100%';
  chartClone.style.height = '100%';
  chartContainer.appendChild(chartClone);
  container.appendChild(chartContainer);

  // Add scores
  const scoresContainer = document.createElement('div');
  scoresContainer.style.backgroundColor = '#f8fafc';
  scoresContainer.style.borderRadius = '16px';
  scoresContainer.style.padding = '24px';
  scoresContainer.style.marginBottom = '32px';

  traitOrder.forEach((trait) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.padding = '12px 0';
    row.style.borderBottom = '1px solid #e2e8f0';

    const label = document.createElement('span');
    label.style.fontSize = '20px';
    label.style.fontWeight = '500';
    label.textContent = traits[trait][language];

    const score = document.createElement('span');
    score.style.fontSize = '24px';
    score.style.fontWeight = 'bold';
    score.style.color = '#2563eb';
    score.textContent = `${scores[trait]}/5`;

    row.appendChild(label);
    row.appendChild(score);
    scoresContainer.appendChild(row);
  });

  container.appendChild(scoresContainer);

  // Add footer
  const footer = document.createElement('div');
  footer.style.marginTop = 'auto';
  footer.style.textAlign = 'center';

  const website = document.createElement('p');
  website.style.fontSize = '20px';
  website.style.color = '#64748b';
  website.style.marginBottom = '16px';
  website.textContent = 'www.difficult-person-test.com';
  footer.appendChild(website);

  try {
    const qrCode = await QRCode.toDataURL('https://www.difficult-person-test.com', {
      width: 120,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    const qrImage = document.createElement('img');
    qrImage.src = qrCode;
    qrImage.style.width = '120px';
    qrImage.style.height = '120px';
    qrImage.style.margin = '0 auto';
    footer.appendChild(qrImage);
  } catch (error) {
    console.error('QR code generation error:', error);
  }

  container.appendChild(footer);

  // Add container to document temporarily
  document.body.appendChild(container);

  try {
    // Generate image
    const image = await toPng(container, {
      quality: 1,
      pixelRatio: 2,
      skipAutoScale: true,
      width: 1080,
      height: 1920,
      style: {
        display: 'block',
        visibility: 'visible'
      }
    });

    // Cleanup
    document.body.removeChild(container);
    return image;
  } catch (error) {
    console.error('Image generation error:', error);
    if (container.parentNode) {
      document.body.removeChild(container);
    }
    return null;
  }
};