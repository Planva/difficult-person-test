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

  try {
    // Generate image with higher quality settings
    const image = await toPng(chartRef, {
      quality: 1,
      pixelRatio: 2,
      skipAutoScale: true,
      style: {
        display: 'block',
        visibility: 'visible'
      }
    });

    return image;
  } catch (error) {
    console.error('Image generation error:', error);
    return null;
  }
};