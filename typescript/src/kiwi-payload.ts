import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import type { ExplorePageInitPayload, Visualization } from './abc-atlas/url-schema';
import { decodeKiwiPayload, encodeAsKiwiQuery} from './kiwi-url-utils';

/**
 * Generates a scRNAseq frame for the given annotation.
 * @param annotation - The annotation object containing labelset and cell_label.
 * @returns The generated scRNAseq frame object.
 */
function generateScRNAseqFrame(annotation: any, genes_filter: string[] = []): Visualization {
  const { metadataFilters, categoryId } = generateMetadataFilters(annotation);
  return {
    dataCollectionId: 'NXJ9NZAQA5MEHQNOWJQ',
    plotId: 'TGBQ2FEV27N0CPLKVAZ',
    metadataFilters: metadataFilters,
    camera: {
      projection: 'WEB_IMAGE',
      center: { x: 51.15907669067383, y: 48.792232513427734 },
      size: { x: 127.61137390136719, y: 81.34007263183594 },
      gridFeatureId: "WMP8NMJ5D8XO1AOI1L9",
      slideBounds: {
          minCorner: { x: 19.089702606201172, y: 10.058863639831543 },
          maxCorner: { x: 28.25238037109375, y: 21.12554168701172 },
      },
    },
    genes: genes_filter.map(g => ({ symbol: g })),
    colorBy: {
      mode: 'METADATA',
      value: categoryId ?? undefined,
      transparency: 0.5,
      isTransparent: false,
    },
    visualizationId: 'IA6Y6SN7QZSIEJ0FZ0U',
    projectId: 'POZ2HCPBT60DSDJ8UA7',
    quantitativeFilters: [],
    annotation: {
      referenceId: '7416B5XJDSY0HDF93RO',
      featureTypeReferenceId: 'CREHRCK2YXRWJK2J0AL',
      isInFront: true,
      fill: { option: 'NONE', color: '#000000', opacity: 100 },
      stroke: { option: 'DEFAULT', color: '#000000', opacity: 100 },
    },
  };
}

/**
* Generates a MerFish frame for the given annotation.
* @param annotation - The annotation object containing labelset and cell_label.
* @returns The generated MerFish frame object.
*/
function generateMerFishFrameSpecies1(annotation: any, genes_filter: string[] = []): Visualization {
  const { metadataFilters, categoryId } = generateMetadataFilters(annotation);
  return {
    dataCollectionId: 'VM4E6J9DPYYD7E0BHNB',
    plotId: 'KGZLAWIPCR4W98F5LD6',
    metadataFilters: metadataFilters,
    camera: {
      projection: 'WEB_IMAGE',
      center: { x: 98.08788299560547, y: 71.96050262451172 },
      size: { x: 167.3242950439453, y: 106.65327453613281 },
      gridFeatureId: 'WMP8NMJ5D8XO1AOI1L9',
      slideBounds: {
        minCorner: { x: 34.845741271972656, y: 21.173229217529297 },
        maxCorner: { x: 55.926456451416016, y: 41.488136291503906 },
      },
      hideUnselected: false,
      offsetIndex: 0,
    },
    genes: genes_filter.map(g => ({ symbol: g })),
    colorBy: {
      mode: 'METADATA',
      value: categoryId ?? undefined,
      transparency: 0.5,
      isTransparent: false,
    },
    visualizationId: '9AUTE9S10KAEC2UZO31',
    projectId: 'POZ2HCPBT60DSDJ8UA7',
    quantitativeFilters: [],
    annotation: {
      referenceId: 'Y3P1JM1ENCGWEW8USTV',
      featureTypeReferenceId: 'CREHRCK2YXRWJK2J0AL',
      isInFront: true,
      fill: { option: 'NONE', color: '#000000', opacity: 100 },
      stroke: { option: 'DEFAULT', color: '#000000', opacity: 100 },
    },
  };
}

/**
* Generates a MerFish frame for the given annotation.
* @param annotation - The annotation object containing labelset and cell_label.
* @returns The generated MerFish frame object.
*/
function generateMerFishFrameSpecies2(annotation: any, genes_filter: string[] = []): Visualization {
  const { metadataFilters, categoryId } = generateMetadataFilters(annotation);
  return {
    dataCollectionId: '3CPIP2804SBDX1DX1RW',
    plotId: 'S5KQTFHCRKHVZVRR5HR',
    metadataFilters: metadataFilters,
    camera: {
      projection: 'WEB_IMAGE',
      center: { x: 97.7215805053711, y: 144.1280975341797 },
      size: { x: 306.3804931640625, y: 195.288330078125 },
      gridFeatureId: 'WMP8NMJ5D8XO1AOI1L9',
      slideBounds: {
        minCorner: { x: 7.681753158569336, y: 51.13364791870117 },
        maxCorner: { x: 43.69768142700195, y: 97.63086700439453 },
      },
      hideUnselected: false,
      offsetIndex: 0,
    },
    genes: genes_filter.map(g => ({ symbol: g })),
    colorBy: {
      mode: 'METADATA',
      value: categoryId ?? undefined,
      transparency: 0.5,
      isTransparent: false,
    },
    visualizationId: 'HZEYXSQOEDND2Q6M97M',
    projectId: 'POZ2HCPBT60DSDJ8UA7',
    quantitativeFilters: [],
    annotation: {
      referenceId: '6T96260126TV4KLGDXG',
      featureTypeReferenceId: 'CREHRCK2YXRWJK2J0AL',
      isInFront: true,
      fill: { option: 'NONE', color: '#000000', opacity: 100 },
      stroke: { option: 'DEFAULT', color: '#000000', opacity: 100 },
    },
  };
}

/**
* Generates a MerFish frame for the given annotation.
* @param annotation - The annotation object containing labelset and cell_label.
* @returns The generated MerFish frame object.
*/
function generateMerFishFrameSpecies3(annotation: any, genes_filter: string[] = []): Visualization {
  const { metadataFilters, categoryId } = generateMetadataFilters(annotation);
  return {
    dataCollectionId: 'EIUALPYNGZ5VU7Y2Y02',
    plotId: 'QZQ2QBMU4T5I47D1K4F',
    metadataFilters: metadataFilters,
    camera: {
      projection: 'CARTESIAN',
      center: { x: 5.4347004890441895, y: 4.979799270629883 },
      size: { x: 44.858089447021484, y: 28.59275245666504 }
    },
    genes: genes_filter.map(g => ({ symbol: g })),
    colorBy: {
      mode: 'METADATA',
      value: categoryId ?? undefined,
      transparency: 0.5,
      isTransparent: false,
    },
    visualizationId: 'FTLAUOV6SLB071SVNU9',
    projectId: 'POZ2HCPBT60DSDJ8UA7',
    quantitativeFilters: [],
    annotation: {
      referenceId: 'none',
      featureTypeReferenceId: 'none',
      isInFront: true,
      fill: { option: 'NONE', color: '#000000', opacity: 100 },
      stroke: { option: 'DEFAULT', color: '#000000', opacity: 100 },
    },
  };
}

/**
 * Generates metadata filters based on the given annotation.
 * @param annotation - The annotation object containing labelset and cell_label.
 * @returns An array of metadata filters.
 */
function generateMetadataFilters(annotation: any) {
    const metadataFilters = [
    { categoryId: 'E3HGBYHRC98GA6FW9F6', selectedValues: [] as string[] }, // Neighborhood
    { categoryId: '3XBOFBR302EYC0UQD51', selectedValues: [] as string[] }, // Class
    { categoryId: 'SQ6WJO0GNUJGFU8LHVV', selectedValues: [] as string[] }, // Subclass
    { categoryId: 'HK14O1ASANPYHONFLLQ', selectedValues: [] as string[] },  // Group
    { categoryId: '6EWBSEJ4YFVGKI2APBL', selectedValues: [] as string[] }  // Cluster
  ];

  let relatedCategoryId: string | null = null;

  switch (annotation.labelset) {
    case 'Neighborhood':
      metadataFilters[0].selectedValues.push(annotation.cell_label);
      relatedCategoryId = metadataFilters[0].categoryId;
      break;
    case 'Class':
      metadataFilters[1].selectedValues.push(annotation.cell_label);
      relatedCategoryId = metadataFilters[1].categoryId;
      break;
    case 'Subclass':
      metadataFilters[2].selectedValues.push(annotation.cell_label);
      relatedCategoryId = metadataFilters[2].categoryId;
      break;
    case 'Group':
      metadataFilters[3].selectedValues.push(annotation.cell_label);
      relatedCategoryId = metadataFilters[3].categoryId;
      break;
    case 'Cluster':
      metadataFilters[4].selectedValues.push(annotation.cell_label);
      relatedCategoryId = metadataFilters[4].categoryId;
      break;
    default:
      break;
  }
  return { metadataFilters, categoryId: relatedCategoryId };;
}

/**
 * Creates a payload object for a given annotation.
 * @param annotation - The annotation object containing labelset and cell_label.
 * @returns The generated ExplorePageInitPayload object.
 */
export function createPayload(annotation: any, genes_filter: string[] = []): ExplorePageInitPayload {
  const scRNAseqFrame = generateScRNAseqFrame(annotation, genes_filter);
  const merFishFrame1 = generateMerFishFrameSpecies1(annotation, genes_filter);
  const merFishFrame2 = generateMerFishFrameSpecies2(annotation, genes_filter);
  const merFishFrame3 = generateMerFishFrameSpecies3(annotation, genes_filter);

  return {
    frames: [scRNAseqFrame, merFishFrame1, merFishFrame2, merFishFrame3],
    layout: 'Quadruple',
  };
}

/**
 * Writes a payload dictionary to the given file.
 * @param outputPathArg - The path where the payload dictionary will be written.
 * @param payloadDictionary - The dictionary containing payloads to write.
 */
export function writePayloadToFile(outputPathArg: string, payloadDictionary: Record<string, any>): void {
  const outputPath = resolve(outputPathArg);
  writeFileSync(outputPath, JSON.stringify(payloadDictionary, null, 2), 'utf8');
  console.log(`Payload dictionary written to ${outputPath}`);
}

/**
 * Generates a payload table from a JSON file and writes it to the specified output path.
 * @param jsonFilePath - The path to the JSON file containing annotations.
 * @param outputPathArg - The path where the payload dictionary will be written.
 */
export function generatePayloadTable(jsonFilePath: string, outputPathArg: string): void {
  const resolvedJsonFilePath = resolve(jsonFilePath);
  const fileContent = readFileSync(resolvedJsonFilePath, 'utf8');
  const jsonData = JSON.parse(fileContent);
  const annotations = jsonData.annotations;

  const payloadDictionary: Record<string, any> = {};

  for (const annotation of annotations) {
    if (annotation.labelset === 'neurotransmitter') {
      continue; // Skip neurotransmitter annotations
    }
    const payload = createPayload(annotation);
//     console.log(JSON.stringify(payload, null, 2))
    payloadDictionary[annotation.cell_set_accession] = encodeAsKiwiQuery(payload);
  }

  writePayloadToFile(outputPathArg, payloadDictionary);
}