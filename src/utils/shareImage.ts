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

  // Create a temporary container with 9:16 aspect ratio
  const container = document.createElement('div');
  container.style.width = '1080px';
  container.style.height = '1920px';
  container.style.backgroundColor = 'white';
  container.style.padding = '40px';
  container.style.boxSizing = 'border-box';
  container.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  document.body.appendChild(container);

  // Add title
  const title = document.createElement('h1');
  title.style.fontSize = '36px';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '24px';
  title.style.color = '#1a1a1a';
  title.style.textAlign = 'center';
  title.textContent = '🧠 Personality Test Results';
  container.appendChild(title);

  // Find highest trait
  const highestTrait = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b);
  const traitKey = highestTrait[0] as TraitType;
  const traitScore = highestTrait[1];

  // Add summary section
  const summaryContainer = document.createElement('div');
  summaryContainer.style.backgroundColor = '#f0f9ff';
  summaryContainer.style.borderRadius = '16px';
  summaryContainer.style.padding = '24px';
  summaryContainer.style.marginBottom = '32px';

  const summaryTitle = document.createElement('h2');
  summaryTitle.style.fontSize = '24px';
  summaryTitle.style.fontWeight = 'bold';
  summaryTitle.style.marginBottom = '16px';
  summaryTitle.style.color = '#0369a1';
  summaryTitle.textContent = `Primary Trait: ${traits[traitKey][language]} (${traitScore}/5)`;
  summaryContainer.appendChild(summaryTitle);

  const traitDescription = document.createElement('p');
  traitDescription.style.fontSize = '16px';
  traitDescription.style.lineHeight = '1.6';
  traitDescription.style.color = '#334155';
  traitDescription.style.marginBottom = '16px';
  traitDescription.textContent = traitDescriptions[language][traitKey].description;
  summaryContainer.appendChild(traitDescription);

  const interpretation = document.createElement('p');
  interpretation.style.fontSize = '16px';
  interpretation.style.lineHeight = '1.6';
  interpretation.style.color = '#334155';
  interpretation.style.fontWeight = '500';
  interpretation.textContent = traitDescriptions[language][traitKey].interpretation(traitScore);
  summaryContainer.appendChild(interpretation);

  container.appendChild(summaryContainer);

  // Add chart
  const chartContainer = document.createElement('div');
  chartContainer.style.width = '600px';
  chartContainer.style.height = '600px';
  chartContainer.style.margin = '0 auto 32px';
  chartContainer.style.position = 'relative';
  
  // Clone and prepare chart
  const chartClone = chartRef.cloneNode(true) as HTMLDivElement;
  chartClone.style.width = '100%';
  chartClone.style.height = '100%';
  chartContainer.appendChild(chartClone);
  container.appendChild(chartContainer);

  // Add scores
  const scoresContainer = document.createElement('div');
  scoresContainer.style.width = '100%';
  scoresContainer.style.backgroundColor = '#f8fafc';
  scoresContainer.style.padding = '24px';
  scoresContainer.style.borderRadius = '16px';

  traitOrder.forEach((trait) => {
    const score = scores[trait];
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.marginBottom = '12px';
    row.style.padding = '8px 0';
    row.style.borderBottom = '1px solid #e2e8f0';

    const label = document.createElement('span');
    label.style.fontSize = '18px';
    label.style.fontWeight = '600';
    label.style.color = '#1a1a1a';
    label.textContent = traits[trait][language];

    const scoreText = document.createElement('span');
    scoreText.style.fontSize = '20px';
    scoreText.style.fontWeight = 'bold';
    scoreText.style.color = '#2563eb';
    scoreText.textContent = `${score}/5`;

    row.appendChild(label);
    row.appendChild(scoreText);
    scoresContainer.appendChild(row);
  });

  container.appendChild(scoresContainer);

  // Add footer
  const footer = document.createElement('div');
  footer.style.marginTop = 'auto';
  footer.style.textAlign = 'center';
  footer.style.paddingTop = '32px';

  const websiteUrl = document.createElement('p');
  websiteUrl.style.fontSize = '18px';
  websiteUrl.style.color = '#4b5563';
  websiteUrl.style.marginBottom = '16px';
  websiteUrl.textContent = 'www.difficult-person-test.com';
  footer.appendChild(websiteUrl);

  try {
    const qrCodeUrl = await QRCode.toDataURL('https://www.difficult-person-test.com', {
      width: 120,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    const qrCode = document.createElement('img');
    qrCode.src = qrCodeUrl;
    qrCode.style.width = '120px';
    qrCode.style.height = '120px';
    qrCode.style.display = 'block';
    qrCode.style.margin = '0 auto';
    footer.appendChild(qrCode);
  } catch (error) {
    console.error('QR code generation error:', error);
  }

  container.appendChild(footer);

  // Wait for all images to load
  await Promise.all(
    Array.from(container.getElementsByTagName('img')).map(
      img => new Promise((resolve) => {
        if (img.complete) resolve(null);
        else img.onload = () => resolve(null);
      })
    )
  );

  // Wait for a frame to ensure everything is rendered
  await new Promise(resolve => requestAnimationFrame(resolve));

  try {
    // Generate image with higher quality settings
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