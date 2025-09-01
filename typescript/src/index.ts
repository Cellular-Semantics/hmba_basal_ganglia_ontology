import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { decodeKiwiPayload, encodeAsKiwiQuery} from './kiwi-url-utils';
import { generatePayloadTable } from './kiwi-payload';


function getOutputPath(): string {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        throw new Error('Output path argument is missing.');
    }
    return resolve(args[0]);
}

function decodePayloadExample() {
    // dev environment example https://dev-knowledge.brain-map.org/abcatlas#
    // non-neuron
    const encodedPayload = 'AQQBTlhKOU5aQVFBNU1FSFFOT1dKUQACVEdCUTJGRVYyN04wQ1BMS1ZBWgADBQFFM0hHQllIUkM5OEdBNkZXOUY2AAIBTm9ubmV1cm9uAAABM1hCT0ZCUjMwMkVZQzBVUUQ1MQACAAABU1E2V0pPMEdOVUpHRlU4TEhWVgACAAABSEsxNE8xQVNBTlBZSE9ORkxMUQACAAABNkVXQlNFSjRZRlZHS0kyQVBCTAACAAAEAQAChMpFmYR%2BVoYDhQxy%2FoU8XEUEV01QOE5NSjVEOFhPMUFPSTFMOQAFg2xvMYI24kGDwAnEgzgCUgYABwAABQAGAQECMk5RVElFN1RBTVA4UFFBSE80UAADfgAAAAQAAAhJQTZZNlNON1FaU0lFSjBGWjBVAAlQT1oySENQQlQ2MERTREo4VUE3AAoACwE3NDE2QjVYSkRTWTBIREY5M1JPAAJDUkVIUkNLMllYUldKSzJKMEFMAAMBBAEAAiMwMDAwMDAAA8gBAAUBAQIjMDAwMDAwAAPIAQAAAAFWTTRFNko5RFBZWUQ3RTBCSE5CAAJLR1pMQVdJUENSNFc5OEY1TEQ2AAMABAEAAoX%2BWYiFjtcfA4YKpk6F9JyqBFdNUDhOTUo1RDhYTzFBT0kxTDkABYQUxBaDjMVShGJpv4S050sGAAcAAAUABgEBAjJOUVRJRTdUQU1QOFBRQUhPNFAAA34AAAAEAAAIOUFVVEU5UzEwS0FFQzJVWk8zMQAJUE9aMkhDUEJUNjBEU0RKOFVBNwAKAAsBWTNQMUpNMUVOQ0dXRVc4VVNUVgACQ1JFSFJDSzJZWFJXSksySjBBTAADAQQBAAIjMDAwMDAwAAPIAQAFAQECIzAwMDAwMAADyAEAAAABM0NQSVAyODA0U0JEWDFEWDFSVwACUzVLUVRGSENSS0hWWlZSUjVIUgADAAQBAAKF5uKGhpZBIAOHaGEyhqCThgRXTVA4Tk1KNUQ4WE8xQU9JMUw5AAWB2KHrhLYRmYTalF2FAoaGBgAHAAAFAAYBAQIyTlFUSUU3VEFNUDhQUUFITzRQAAN%2BAAAABAAACEhaRVlYU1FPRURORDJRNk05N00ACVBPWjJIQ1BCVDYwRFNESjhVQTcACgALATZUOTYyNjAxMjZUVjRLTEdEWEcAAkNSRUhSQ0syWVhSV0pLMkowQUwAAwEEAQACIzAwMDAwMAADyAEABQEBAiMwMDAwMDAAA8gBAAAAAUVJVUFMUFlOR1o1VlU3WTJZMDIAAlFaUTJRQk1VNFQ1STQ3RDFLNEYAAwAEAQECgSLSW4EItT4DhF7dZoPqe8kABQEBRUlGM0sAAAYBAQJISzE0TzFBU0FOUFlIT05GTExRAAN%2BAAAABAAACEZUTEFVT1Y2U0xCMDcxU1ZOVTkACVBPWjJIQ1BCVDYwRFNESjhVQTcACgALAW5vbmUAAm5vbmUAAwEEAQACIzAwMDAwMAADyAEABQEBAiMwMDAwMDAAA8gBAAAAAggA'

    const decodedPayload = decodeKiwiPayload(encodedPayload);
    // const content = 'Hello from TypeScript with a custom output path!\n';
    const content = JSON.stringify(decodedPayload, null, 2);
    console.log('Decoded Payload:', content);
    // writeFileSync(getOutputPath(), content, 'utf8');
    // console.log(`File written to ${getOutputPath()}`);
}


// decodePayloadExample();
const JSON_FILE_PATH = resolve(__dirname, '../../src/dendrograms/CCN20250428.json');
generatePayloadTable(JSON_FILE_PATH, getOutputPath());
console.log('ABC url generation successfully completed!');