# ABC Atlas URL link outs generator

These Typescript files aims to programmatically construct URLs to the Allen Brain Atlas (ABA).

Kiwi processing source is extracted and copied from https://github.com/AllenInstitute/bkp-client/blob/dev/src/services/explore-visualizations/kiwi-url-utils.ts

_Note: Minor file location and import path changes took place to make it work with the current codebase._

Kiwi library: https://github.com/evanw/kiwi

Example ABC atlas page: https://knowledge.brain-map.org/abcatlas#AQIBQVA4Sk5ONUxZQUJHVk1HS1kxQgACUTFOQ1dXUEc2RlowRE5JWEpCUQADBAFGUzAwRFhWMFQ5UjFYOUZKNFFFAAIBMDEgSVQtRVQgR2x1dAAAAVFZNVM4S01PNUhMSlVGMFAwMEsAAgAAATE1Qks0N0RDSU9GMVNMTFVXOVAAAgAAAUNCR0MwVTMwVlY5SlBSNjBUSlUAAgAABAEBAoGENWSC6KlQA4OK5ZqDFKflAAUBAUMyMzAwOTlEMDhSaWsAAAYBAQJGUzAwRFhWMFQ5UjFYOUZKNFFFAAN%2BAAAABAAACEc0STRHRkpYSkI5QVRaM1BUWDEACUxWREJKQVc4Qkk1WVNTMVFVQkcACgALAW5vbmUAAm5vbmUAAwEEAQACIzAwMDAwMAADyAEABQEBAiMwMDAwMDAAA8gBAAAAAVpJM1JSMEZYTDNIWVhHVkUyUzUAAkZZWTRPTTJMVTVKMFlPRjA3RFIAAwQBRlMwMERYVjBUOVIxWDlGSjRRRQACATAxIElULUVUIEdsdXQAAAFRWTVTOEtNTzVITEpVRjBQMDBLAAIAAAExNUJLNDdEQ0lPRjFTTExVVzlQAAIAAAFDQkdDMFUzMFZWOUpQUjYwVEpVAAIAAAQBAAKEUL8fg4IJfwOEUGWQhMQ92QQyTlFUSUU3VEFNUDhQUUFITzRQAAWBr6ZKgemsDoGggUeAktXoBgAHAAAFAAYBAQJGUzAwRFhWMFQ5UjFYOUZKNFFFAAN%2BAAAABAAACDRTVENTWkJYSFlPSTBKVVVBM00ACUxWREJKQVc4Qkk1WVNTMVFVQkcACgALAVRMT0tXQ0w5NVJVMDNEOVBFVEcAAlRGUUZMTkVQM1YyMjJZODhDNjQAAwEEAQACIzAwMDAwMAADyAEABQEBAiMwMDAwMDAAA8gBAAAAAgMA

## How to use

Navigate to `scr/dendrograms` folder and run `make`.

## How to change url parameters

Navigate to `typescript/src/kiwi-payload.ts`. This is the typescript object that is encoded into a URL string.

Update the object as needed and run `make` in the `scr/dendrograms` folder to regenerate the files.

### How to decode the URL to see what is the expected payload

In case there is a need to decode the URL to see what is the expected payload, you should edit `typescript/src/index.ts`:

In the index.ts there is a disabled function named `decodePayloadExample`. You need to call this function from the main function and provide the URL you want to decode. For example:

```typescript
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
    const encodedPayload = 'AQEBSzlKTjIzUDI0S1FDR0s5VTc1QQACSFNZWlBaVzE2NjlVODIxQldZUAADAAQBAAKEUL8fg4IJfwOF4J5KhMQ92QQyTlFUSUU3VEFNUDhQUUFITzRQAAWBr6ZKgemsDoGggUeAktXoBgAHAAAFAAYBAQJGUzAwRFhWMFQ5UjFYOUZKNFFFAAN%2BAAAABAAACFZGT0ZZUEZRR1JLVURRVVozRkYACUxWREJKQVc4Qkk1WVNTMVFVQkcACgALAVRMT0tXQ0w5NVJVMDNEOVBFVEcAAjczR1ZURFhERUdFMjdNMlhKTVQAAwEEAQACIzAwMDAwMAADyAEABQEBAiMwMDAwMDAAA8gBAAAAAgEA'

    const decodedPayload = decodeKiwiPayload(encodedPayload);
    // const content = 'Hello from TypeScript with a custom output path!\n';
    const content = JSON.stringify(decodedPayload, null, 2);
    console.log('Decoded Payload:', content);
    // writeFileSync(getOutputPath(), content, 'utf8');
    // console.log(`File written to ${getOutputPath()}`);
}


decodePayloadExample();
// const JSON_FILE_PATH = resolve(__dirname, '../../src/dendrograms/CCN20230722.json');
// generatePayloadTable(JSON_FILE_PATH, getOutputPath());
// console.log('ABC url generation successfully completed!');
```
once you  run `make` in the `scr/dendrograms` folder, you will see the decoded payload printed in the console.

