# PoC Execution Steps

## 1. Get API3 airnode fork, set nvm to latest LTS, check node version, install yarn

Get API3 airnode code...

```sh
git clone git@github.com:fbrcode/airnode.git --branch pre-alpha && cd airnode
```

Set nvm to use LTS version...

```sh
nvm use lts/fermium`
```

Output: `Now using node v14.17.6 (npm v6.14.15)`

Check yarn version (install it if not there)

```sh
yarn version
```

Output: `yarn version v1.22.11`

Install yarn...

```sh
npm install -g yarn
```

## 2. Build all airnode packages

```sh
yarn run bootstrap
```

Output:

```txt
yarn run v1.22.11
$ yarn install && lerna bootstrap
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[4/5] 🔗  Linking dependencies...
warning "lerna > @lerna/version > @lerna/github-client > @octokit/rest > @octokit/plugin-request-log@1.0.2" has unmet peer dependency "@octokit/core@>=3".
[5/5] 🔨  Building fresh packages...
lerna notice cli v3.22.1
lerna info Bootstrapping 9 packages
lerna info Installing external dependencies
lerna info Symlinking packages and binaries
lerna success Bootstrapped 9 packages
✨  Done in 32.85s.
```

## 3. Mock API with standalone server

Get, install and run the API mock.

```sh
git clone git@github.com:fbrcode/server-api.git
npm install
npm start
```

Call cURL to check output

```sh
curl -X 'GET' \
'http://localhost:3333/v1/sensor/31d42f54-ef12-4c83-a5be-19a87368b648' \
-H 'accept: application/json' | \
node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 4 ))"
```

Expected Output:

```json
{
    "uuid": "31d42f54-ef12-4c83-a5be-19a87368b648",
    "qrCode": "qr##code##sample##data",
    "sensorData": {
        "lastTimestamp": "2021-02-01 00:00:00",
        "score": 90.8,
        "scoreUnit": "device",
        "temperature": 77.9,
        "temperatureUnit": "F",
        "humidity": 33.9,
        "humidityUnit": "g/m3",
        "co2": 408.8,
        "co2Unit": "ppm",
        "voc": 148,
        "vocUnit": "ppm",
        "pm25": 2.7,
        "pm25Unit": "2.5 micrometers",
        "light": 12.8,
        "lightUnit": "lumens",
        "noise": 62.2,
        "noiseUnit": "dB"
    },
    "location": {
        "street": "123 Main Street",
        "city": "Miami",
        "state": "FL",
        "zip": "33132"
    },
    "category": {
        "id": 1,
        "name": "Basic Type"
    },
    "status": "active"
}
```

## 4. Get Swagger Editor fork, launch OAS editor for API

```sh
git clone git@github.com:fbrcode/swagger-editor.git
cd swagger-editor
npm run dev
```

Output:

```txt
> swagger-editor@3.18.2 predev /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor
> npm install

> fsevents@1.2.13 install /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/node_modules/fsevents
> node install.js

  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
  SOLINK_MODULE(target) Release/fse.node

> core-js-pure@3.15.2 postinstall /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/node_modules/core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> cypress@8.0.0 postinstall /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/node_modules/cypress
> node index.js --exec install

Installing Cypress (version: 8.0.0)

✔  Downloaded Cypress
✔  Unzipped Cypress
✔  Finished Installation /Users/fabiobressler/Library/Caches/Cypress/8.0.0

You can now open Cypress by running: node_modules/.bin/cypress open

https://on.cypress.io/installing-cypress


> react-ace@4.4.0 postinstall /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/node_modules/react-ace
> opencollective postinstall

                                 ..,::::::::::,..
                              .,::::::::::::::::::,.
                           .,:::::::::::::::::::::,.
                         .:::::::::::,,,,,,,,:::,.
                        ,::::::::,.                      .
                       ,:::::::,                       .,,.
                      ,:::::::.                      .,,,,,.
                     .:::::::.                       .,,,,,,
                     :::::::.                        .,,,,,,.
                     :::::::                          ,,,,,,,
                     :::::::                          ,,,,,,,
                     :::::::.                        .,,,,,,.
                     .:::::::.                       .,,,,,,
                      ,:::::::.                      .,,,,,.
                       ,:::::::,                       .,,.
                        ,::::::::,.                      .
                         .:::::::::::,,,,,,,,:::,.
                           .,:::::::::::::::::::::,.
                              .,::::::::::::::::::,.
                                 ..,::::::::::,..


                        Thanks for installing react-ace 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.

                            Number of contributors: 0
                               Number of backers: 6
                                Annual budget: $0
                              Current balance: $110

         👉  Donate: https://opencollective.com/react-ace/donate

added 3930 packages from 1162 contributors and audited 3938 packages in 57.533s

225 packages are looking for funding
  run `npm fund` for details

found 10 vulnerabilities (7 low, 3 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details

> swagger-editor@3.18.2 dev /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor
> npm-run-all --parallel hot-server


> swagger-editor@3.18.2 hot-server /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor
> webpack serve --host 0.0.0.0 --config webpack/dev.babel.js --inline --hot --progress --content-base dev-helpers/

10% building 5/5 modules 0 active(node:77443) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
(Use `node --trace-deprecation ...` to show where the warning was created)
ℹ ｢wds｣: Project is running at http://0.0.0.0:3200/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from dev-helpers/
69% building 1049/1064 modules 15 active /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/node_modules/swagger-client/node_modules/qs/lib/index.js[BABEL] Note: The code generator has deoptimised the styling of /Users/fabiobressler/job/inveniam/repos/fbrcode/swagger-editor/src/plugins/json-schema-validator/validator.worker.js as it exceeds the max of 500KB.
95% emitting RemoveSourcemapsLackingMatchingAssetsPluginRemoveSourcemapsLackingMatchingAssetsPlugin: blocking emission of "validator.worker.js.map"
ℹ ｢wdm｣: Hash: 2c3bef333aed5c089b4c
Version: webpack 4.46.0
Time: 6503ms
Built at: 09/23/2021 3:42:33 PM
                                  Asset      Size                            Chunks                          Chunk Names
               swagger-editor-bundle.js  6.05 MiB             swagger-editor-bundle  [emitted]        [big]  swagger-editor-bundle
           swagger-editor-bundle.js.map  6.57 MiB             swagger-editor-bundle  [emitted] [dev]         swagger-editor-bundle
    swagger-editor-standalone-preset.js  2.96 MiB  swagger-editor-standalone-preset  [emitted]        [big]  swagger-editor-standalone-preset
swagger-editor-standalone-preset.js.map  2.95 MiB  swagger-editor-standalone-preset  [emitted] [dev]         swagger-editor-standalone-preset
                     swagger-editor.css   196 KiB                    swagger-editor  [emitted]               swagger-editor
                 swagger-editor.css.map   234 KiB                    swagger-editor  [emitted] [dev]         swagger-editor
Entrypoint swagger-editor-bundle [big] = swagger-editor-bundle.js swagger-editor-bundle.js.map
Entrypoint swagger-editor-standalone-preset [big] = swagger-editor-standalone-preset.js swagger-editor-standalone-preset.js.map
Entrypoint swagger-editor = swagger-editor.css swagger-editor.js swagger-editor.css.map swagger-editor.js.map
[2] multi (webpack)-dev-server/client?http://0.0.0.0:3200 (webpack)/hot/dev-server.js ./src/index.js 52 bytes {swagger-editor-bundle} [built]
[3] multi (webpack)-dev-server/client?http://0.0.0.0:3200 (webpack)/hot/dev-server.js ./src/standalone/index.js 52 bytes {swagger-editor-standalone-preset} [built]
[5] multi (webpack)-dev-server/client?http://0.0.0.0:3200 (webpack)/hot/dev-server.js ./src/styles/main.less 52 bytes {swagger-editor} [built]
[] css ./node_modules/css-loader/dist/cjs.js??ref--10-1!./node_modules/postcss-loader/dist/cjs.js??ref--10-2!./node_modules/less-loader/dist/cjs.js??ref--10-3!./src/styles/main.less 196 KiB {swagger-editor}
[./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js] 64 bytes {swagger-editor-bundle} {swagger-editor-standalone-preset} [built]
[./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js] 62 bytes {swagger-editor-bundle} [built]
[./node_modules/deepmerge/dist/cjs.js] 3.94 KiB {swagger-editor-bundle} [built]
[./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js] 4.35 KiB {swagger-editor} [built]
[./node_modules/strip-ansi/index.js] 161 bytes {swagger-editor-bundle} {swagger-editor-standalone-preset} {swagger-editor} [built]
[./node_modules/swagger-ui/dist/swagger-ui-es-bundle.js] 1.04 MiB {swagger-editor-bundle} [built]
[./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:3200] (webpack)-dev-server/client?http://0.0.0.0:3200 4.29 KiB {swagger-editor-bundle} {swagger-editor-standalone-preset} {swagger-editor} [built]
[./node_modules/webpack/hot/dev-server.js] (webpack)/hot/dev-server.js 1.59 KiB {swagger-editor-bundle} {swagger-editor-standalone-preset} {swagger-editor} [built]
[./src/index.js] 3.25 KiB {swagger-editor-bundle} [built]
[./src/standalone/index.js] 581 bytes {swagger-editor-standalone-preset} [built]
[./src/styles/main.less] 383 bytes {swagger-editor} [built]
    + 1265 hidden modules
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js??ref--10-1!node_modules/postcss-loader/dist/cjs.js??ref--10-2!node_modules/less-loader/dist/cjs.js??ref--10-3!src/styles/main.less:
    Entrypoint mini-css-extract-plugin = *
    [./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles/main.less] ./node_modules/css-loader/dist/cjs.js??ref--10-1!./node_modules/postcss-loader/dist/cjs.js??ref--10-2!./node_modules/less-loader/dist/cjs.js??ref--10-3!./src/styles/main.less 437 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/dist/runtime/api.js] 1.57 KiB {mini-css-extract-plugin} [built]
    [./node_modules/css-loader/dist/runtime/cssWithMappingToString.js] 2.27 KiB {mini-css-extract-plugin} [built]
Child worker:
                      Asset      Size  Chunks         Chunk Names
        validator.worker.js  1.03 MiB    main         main
    validator.worker.js.map  1.04 MiB    main  [dev]  main
    Entrypoint main = validator.worker.js validator.worker.js.map
    [./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js] 63 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js] 62 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js] 64 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js] 64 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js] 66 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js] 61 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js] 62 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/helpers/classCallCheck.js] 274 bytes {main} [built]
    [./node_modules/@babel/runtime-corejs3/helpers/createClass.js] 772 bytes {main} [built]
    [./node_modules/ajv-errors/index.js] 1.31 KiB {main} [built]
    [./node_modules/ajv-keywords/index.js] 761 bytes {main} [built]
    [./node_modules/ajv/lib/ajv.js] 15.5 KiB {main} [built]
    [./node_modules/babel-loader/lib/index.js!./src/plugins/json-schema-validator/validator.worker.js] ./node_modules/babel-loader/lib!./src/plugins/json-schema-validator/validator.worker.js 778 bytes {main} [built]
    [./node_modules/promise-worker/register.js] 2.25 KiB {main} [built]
    [./src/plugins/json-schema-validator/validator/index.js] 4.07 KiB {main} [built]
        + 443 hidden modules
ℹ ｢wdm｣: Compiled successfully.
```

Go to Swagger [editor interface web browser](http://localhost:3200/) and load you OAS file (matching API):

```yaml
openapi: '3.0.2'
info:
  title: IAQ Sensors Data - OpenAPI Specification
  description: This is a mock for IAQ sensors data API.
  termsOfService: http://localhost/tos/
  contact: 
    name: Fabio Bressler
    email: fabio.bressler@gmail.com
  license:
    name: MIT Licese
    url: https://opensource.org/licenses/MIT
  version: '0.1'
externalDocs:
  description: Find out more about this project
  url: https://inveniam.io/iaq-sensors

servers:
  - url: http://localhost:3333/v1
  - url: http://api-iaq-sensors.inveniam.io/v1

tags:
  - name: IAQ Sensors
    description: Everything related to Indoor Air Quality (IAQ) sensors
    externalDocs:
      description: Find out more
      url: https://inveniam.io/iaq-sensors
  - name: Sensor
    description: Sensor information details

paths:
  /sensor/{sensorUUID}:
    get:
      tags:
        - Sensor
      summary: Find pet by ID
      description: Returns a single sensor data
      operationId: getSensorById
      parameters:
        - name: sensorUUID
          in: path
          description: Sensor's universal unique identification to return
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Sensor'
        '400':
          description: Invalid UUID supplied
        '404':
          description: Sensor not found

components:
  schemas:
    SensorData:
      type: object
      properties:
        lastTimestamp:
          type: string
          example: "2021-02-01 00:00:00"
        score:
          type: number
          description: Device score
          example: 90.8
        scoreUnit:
          type: string
          example: device
        temperature:
          type: number
          example: 77.9
        temperatureUnit:
          type: string
          example: F
        humidity:
          type: number
          example: 33.9
        humidityUnit:
          type: string
          example: g/m3
        co2:
          type: number
          description: Carbon Dioxide
          example: 408.8
        co2Unit:
          type: string
          description: Parts Per Million
          example: ppm
        voc:
          type: number
          description: Volatile Organic Compound
          example: 148.0
        vocUnit:
          type: string
          description: Parts Per Million
          example: ppm
        pm25:
          type: number
          description: Particulate Matter
          example: 2.7
        pm25Unit:
          type: string
          example: 2.5 micrometers
        light:
          type: number
          description: Light intensity
          example: 12.8
        lightUnit:
          type: string
          example: lumens
        noise:
          type: number
          description: Noise intensity
          example: 62.2
        noiseUnit:
          type: string
          description: Decibels
          example: dB
    Sensor:
      type: object
      properties:
        uuid:
          type: string
          example: 31d42f54-ef12-4c83-a5be-19a87368b648
          description: https://www.uuidgenerator.net/version4
        qrCode:
          type: string
          example: 'qr##code##sample##data'
        sensorData:
          $ref: '#/components/schemas/SensorData'
        location:
          $ref: '#/components/schemas/Location'
        category:
          $ref: '#/components/schemas/Category'
        status:
          type: string
          description: sensor current status
          enum:
            - active
            - inactive
            - maintenance
            - destroyed
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 1
        name:
          type: string
          example: Basic Type
    Location:
      type: object
      properties:
        street:
          type: string
          example: 123 Main Street
        city:
          type: string
          example: Miami
        state:
          type: string
          example: FL
        zip:
          type: string
          example: '33132'
```

## 5. Start local blockchain

Go back to airnode main forked directory and start it.

> **Note**: Change the configuration file `./packages/operation/hardhat.config.ts` to adjust blockchain setings like number of accounts to initiate, etc.

```sh
yarn run dev:eth-node
```

Output:

```txt
yarn run v1.22.11
$ (cd packages/operation && yarn run dev:eth-node)
$ hardhat node
Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/

Accounts
========
Account #0: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266 (1000000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8 (1000000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

Account #2: 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc (1000000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a

Account #3: 0x90f79bf6eb2c4f870365e785982e1f101e93b906 (1000000 ETH)
Private Key: 0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6

Account #4: 0x15d34aaf54267db7d7c367839aaf71a00a2c6a65 (1000000 ETH)
Private Key: 0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a
```

## 6. Initiate Explorer

Explorer allow easier blockchain visualization.

> Source: [](https://github.com/etherparty/explorer)

Get forked code and start it.

```sh
git clone git@github.com:fbrcode/explorer.git
cd explorer
npm start
```

Then visit [](http://localhost:8000) in your browser.

## 7. OIS Setup

Use OAS -> OIS convertion tooling available on master branch.

```sh
git clone git@github.com:fbrcode/airnode.git --branch master oas-ois-converter && cd oas-ois-converter
cd packages/validator
```

Run the convertion from OAS to OIS...

```sh
yarn run convert \
--from="oas" \
--to="ois" \
--specs="exampleSpecs/iaq_sensors_api_mock.json" \
> exampleSpecs/iaq_sensors_api_mock_ois.json
```

Run the conversion from OIS to `config.json`...

```sh

```


## 8. Deploy airnode protocol and link smart contract to API

Deploy contract over started hardhat eth node:

```sh
cd ./airnode/packages/operation
yarn run dev:eth-deploy
```

**Output**:

```txt
➜  operation git:(master) ✗ yarn run dev:eth-deploy
yarn run v1.22.11
$ ts-node src/scripts/evm-dev-deploy.ts
--> Loading configuration...
*** config ==>  {
  deployerIndex: 0,
  airnodes: {
    CurrencyConverterAirnode: {
      airnodeAdmin: '0x5e0051B74bb4006480A1b548af9F1F0e0954F410',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      authorizers: [Array],
      endpoints: [Object],
      templates: [Object]
    }
  },
  authorizers: { public: '0x0000000000000000000000000000000000000000' },
  clients: { MockAirnodeRrpClientFactory: { endorsers: [Array] } },
  requesters: [
    { id: 'alice', airnodes: [Object] },
    { id: 'bob', airnodes: [Object] }
  ],
  requests: [
    {
      requesterId: 'bob',
      type: 'regular',
      airnode: 'CurrencyConverterAirnode',
      template: 'template-1',
      client: 'MockAirnodeRrpClientFactory',
      fulfillFunctionName: 'fulfill',
      parameters: [Array]
    },
    {
      requesterId: 'bob',
      type: 'full',
      airnode: 'CurrencyConverterAirnode',
      endpoint: 'convertToUSD',
      oisTitle: 'Currency Converter API',
      client: 'MockAirnodeRrpClientFactory',
      fulfillFunctionName: 'fulfill',
      parameters: [Array]
    },
    {
      requesterId: 'alice',
      type: 'withdrawal',
      airnode: 'CurrencyConverterAirnode',
      destination: 'alice'
    }
  ]
}
*** state1 ==>  {
  airnodesByName: {},
  authorizersByName: {},
  clientsByName: {},
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {},
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: -1024,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 0,
      connection: [Object],
      _nextId: 42
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: { block: -2 },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { <pending> },
    _maxInternalBlockNumber: -1024,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 0,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 42
  },
  requestersById: {},
  templatesByName: {}
}
--> Deploying contracts...
*** state2 ==>  {
  airnodesByName: {},
  authorizersByName: {},
  clientsByName: {},
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 53,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 53,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {},
  templatesByName: {}
}
*** state3 ==>  {
  airnodesByName: {},
  authorizersByName: {},
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 61,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 61,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {},
  templatesByName: {}
}
*** state4 ==>  {
  airnodesByName: {},
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 61,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 61,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {},
  templatesByName: {}
}
--> Assigning wallets...
*** state5 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 61,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 61,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {},
  templatesByName: {}
}
*** state6 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 87,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 87,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
*** state7 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 87,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 87,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
--> Funding wallets...
*** state8 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 95,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 95,
    _eventLoopCache: {
      detectNetwork: null,
      eth_chainId: [Promise],
      eth_blockNumber: null
    },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
*** state9 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 111,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5,
      't:0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7': 6,
      't:0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d': 7
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 111,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
*** state10 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 127,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5,
      't:0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7': 6,
      't:0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d': 7,
      't:0xcaa2f0c61fe703172f794c2de914df68f0cf4f6967aac35ea5f6c55eda2457cb': 8,
      't:0xb9433d87bbab2761ab60b73ad9f954e55e4e949128a74a0f66951db4d6f9d511': 9
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 127,
    _eventLoopCache: {
      detectNetwork: null,
      eth_chainId: [Promise],
      eth_blockNumber: null
    },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
--> Setting Airnode parameters...
*** state11 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 140,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5,
      't:0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7': 6,
      't:0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d': 7,
      't:0xcaa2f0c61fe703172f794c2de914df68f0cf4f6967aac35ea5f6c55eda2457cb': 8,
      't:0xb9433d87bbab2761ab60b73ad9f954e55e4e949128a74a0f66951db4d6f9d511': 9,
      't:0x26d1eba85e0b4be4c2db820de0d88672dc11a1b409b6f3933d55be5318361857': 10
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 140,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
--> Endorsing client contracts...
*** state12 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 153,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5,
      't:0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7': 6,
      't:0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d': 7,
      't:0xcaa2f0c61fe703172f794c2de914df68f0cf4f6967aac35ea5f6c55eda2457cb': 8,
      't:0xb9433d87bbab2761ab60b73ad9f954e55e4e949128a74a0f66951db4d6f9d511': 9,
      't:0x26d1eba85e0b4be4c2db820de0d88672dc11a1b409b6f3933d55be5318361857': 10,
      't:0xfa92d34fbd2c35cacf8ea2e7e453b23046c6a8263c33af634e6fe215a8122f03': 11
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 153,
    _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {}
}
--> Creating templates...
*** state13 ==>  {
  airnodesByName: {
    CurrencyConverterAirnode: {
      masterWalletAddress: '0x2886De6bbd66DB353C5Ce2e91359e7C39C962fd7',
      mnemonic: 'achieve climb couple wait accident symbol spy blouse reduce foil echo label',
      signer: [Wallet],
      xpub: 'xpub661MyMwAqRbcGeCE1g3KTUVGZsFDE3jMNinRPGCQGQsAp1nwinB9Pi16ihKPJw7qtaaTFuBHbRPeSc6w3AcMjxiHkAPfyp1hqQRbthv4Ryx'
    }
  },
  authorizersByName: { public: '0x0000000000000000000000000000000000000000' },
  clientsByName: {
    MockAirnodeRrpClientFactory: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
      resolvedAddress: [Promise],
      'airnodeRrp()': [Function (anonymous)],
      'fulfill(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysReverts(bytes32,uint256,bytes)': [Function (anonymous)],
      'fulfillAlwaysRunsOutOfGas(bytes32,uint256,bytes)': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      airnodeRrp: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillAlwaysReverts: [Function (anonymous)],
      fulfillAlwaysRunsOutOfGas: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  config: {
    deployerIndex: 0,
    airnodes: { CurrencyConverterAirnode: [Object] },
    authorizers: { public: '0x0000000000000000000000000000000000000000' },
    clients: { MockAirnodeRrpClientFactory: [Object] },
    requesters: [ [Object], [Object] ],
    requests: [ [Object], [Object], [Object] ]
  },
  contracts: {
    AirnodeRrp: Contract {
      interface: [Interface],
      provider: [JsonRpcProvider],
      signer: [JsonRpcSigner],
      callStatic: [Object],
      estimateGas: [Object],
      functions: [Object],
      populateTransaction: [Object],
      filters: [Object],
      _runningEvents: {},
      _wrappedEmits: {},
      address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
      resolvedAddress: [Promise],
      'checkAuthorizationStatus(bytes32,bytes32,bytes32,uint256,address,address)': [Function (anonymous)],
      'checkAuthorizationStatuses(bytes32,bytes32[],bytes32[],uint256[],address[],address[])': [Function (anonymous)],
      'clientAddressToNoRequests(address)': [Function (anonymous)],
      'createRequester(address)': [Function (anonymous)],
      'createTemplate(bytes32,bytes32,bytes)': [Function (anonymous)],
      'fail(bytes32,bytes32,address,bytes4)': [Function (anonymous)],
      'fulfill(bytes32,bytes32,uint256,bytes,address,bytes4)': [Function (anonymous)],
      'fulfillWithdrawal(bytes32,bytes32,uint256,address)': [Function (anonymous)],
      'getAirnodeParameters(bytes32)': [Function (anonymous)],
      'getAirnodeParametersAndBlockNumber(bytes32)': [Function (anonymous)],
      'getTemplate(bytes32)': [Function (anonymous)],
      'getTemplates(bytes32[])': [Function (anonymous)],
      'makeFullRequest(bytes32,bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'makeRequest(bytes32,uint256,address,address,bytes4,bytes)': [Function (anonymous)],
      'requestWithIdHasFailed(bytes32)': [Function (anonymous)],
      'requestWithdrawal(bytes32,uint256,address,address)': [Function (anonymous)],
      'requesterIndexToAdmin(uint256)': [Function (anonymous)],
      'requesterIndexToClientAddressToEndorsementStatus(uint256,address)': [Function (anonymous)],
      'requesterIndexToNextWithdrawalRequestIndex(uint256)': [Function (anonymous)],
      'setAirnodeParameters(address,string,address[])': [Function (anonymous)],
      'setAirnodeParametersAndForwardFunds(address,string,address[])': [Function (anonymous)],
      'setClientEndorsementStatus(uint256,address,bool)': [Function (anonymous)],
      'setRequesterAdmin(uint256,address)': [Function (anonymous)],
      checkAuthorizationStatus: [Function (anonymous)],
      checkAuthorizationStatuses: [Function (anonymous)],
      clientAddressToNoRequests: [Function (anonymous)],
      createRequester: [Function (anonymous)],
      createTemplate: [Function (anonymous)],
      fail: [Function (anonymous)],
      fulfill: [Function (anonymous)],
      fulfillWithdrawal: [Function (anonymous)],
      getAirnodeParameters: [Function (anonymous)],
      getAirnodeParametersAndBlockNumber: [Function (anonymous)],
      getTemplate: [Function (anonymous)],
      getTemplates: [Function (anonymous)],
      makeFullRequest: [Function (anonymous)],
      makeRequest: [Function (anonymous)],
      requestWithIdHasFailed: [Function (anonymous)],
      requestWithdrawal: [Function (anonymous)],
      requesterIndexToAdmin: [Function (anonymous)],
      requesterIndexToClientAddressToEndorsementStatus: [Function (anonymous)],
      requesterIndexToNextWithdrawalRequestIndex: [Function (anonymous)],
      setAirnodeParameters: [Function (anonymous)],
      setAirnodeParametersAndForwardFunds: [Function (anonymous)],
      setClientEndorsementStatus: [Function (anonymous)],
      setRequesterAdmin: [Function (anonymous)],
      deployTransaction: [Object],
      _deployedPromise: [Promise]
    }
  },
  deployer: JsonRpcSigner {
    _isSigner: true,
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: [Object],
      formatter: [Formatter],
      anyNetwork: false,
      _networkPromise: [Promise],
      _maxInternalBlockNumber: 0,
      _lastBlockNumber: -2,
      _pollingInterval: 4000,
      _fastQueryDate: 1632505725852,
      connection: [Object],
      _nextId: 164,
      _eventLoopCache: [Object],
      _network: [Object],
      _internalBlockNumber: [Promise],
      _fastBlockNumber: 0,
      _fastBlockNumberPromise: [Promise]
    },
    _index: 0,
    _address: null
  },
  provider: JsonRpcProvider {
    _isProvider: true,
    _events: [],
    _emitted: {
      block: -2,
      't:0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0': 1,
      't:0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488': 2,
      't:0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f': 3,
      't:0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f': 4,
      't:0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3': 5,
      't:0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7': 6,
      't:0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d': 7,
      't:0xcaa2f0c61fe703172f794c2de914df68f0cf4f6967aac35ea5f6c55eda2457cb': 8,
      't:0xb9433d87bbab2761ab60b73ad9f954e55e4e949128a74a0f66951db4d6f9d511': 9,
      't:0x26d1eba85e0b4be4c2db820de0d88672dc11a1b409b6f3933d55be5318361857': 10,
      't:0xfa92d34fbd2c35cacf8ea2e7e453b23046c6a8263c33af634e6fe215a8122f03': 11,
      't:0xb0eeca9276cfacc6914d00aca7095dfd0cff33976efe9918f4346be82309aaf9': 12
    },
    formatter: Formatter { formats: [Object] },
    anyNetwork: false,
    _networkPromise: Promise { [Object] },
    _maxInternalBlockNumber: 0,
    _lastBlockNumber: -2,
    _pollingInterval: 4000,
    _fastQueryDate: 1632505725852,
    connection: { url: 'http://127.0.0.1:8545/' },
    _nextId: 164,
    _eventLoopCache: {
      detectNetwork: null,
      eth_chainId: [Promise],
      eth_blockNumber: null
    },
    _network: { chainId: 31337, name: 'unknown' },
    _internalBlockNumber: Promise { [Object] },
    _fastBlockNumber: 0,
    _fastBlockNumberPromise: Promise { 0 }
  },
  requestersById: {
    alice: {
      address: '0x3F4449Eaa1817c1A91Faf287812698F546835A2a',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    },
    bob: {
      address: '0x8def03d7222a07f4933Fe79834953d3644F44deB',
      designatedWallets: [Array],
      requesterIndex: [BigNumber],
      signer: [Wallet]
    }
  },
  templatesByName: {
    'CurrencyConverterAirnode-template-1': {
      airnodeName: 'CurrencyConverterAirnode',
      hash: '0x38c6f0662a32197adb49a0c6d9fa2c5ea46eb0c299957746c9c82923d8ac1ff3'
    }
  }
}
--> Deployment successful!
--> Saving deployment...
--> Deployment saved!
✨  Done in 2.55s.
```

***>> hardhat eth node execution information <<***:

**Output**:

```txt
eth_chainId
eth_blockNumber
eth_chainId
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Contract deployment: <UnrecognizedContract>
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x7ed050910c20f5e268280af61ae4ccb850ea7ad0f9dabe610e0a9c1a2386c5d0
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            3534701 of 3534701
  Block #1:            0xbdbaaded500138452739c40812967de36e544c50a5f686a496848b292440f8e5

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Contract deployment: <UnrecognizedContract>
  Contract address:    0xe7f1725e7734ce288f8367e1bb143e90bb3f0512
  Transaction:         0xd23563ff76fe6dbcf1bedf7cf1f3abc6a44f6e8e5dde5fa851f4a5bf8bdd7488
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            803596 of 803596
  Block #2:            0xa303e5d1e1630cd0cba9bd89c6bcf3e1f46c0d2be6bdbefd6911f792f184ad25

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getTransactionReceipt
eth_accounts (2)
eth_chainId
eth_estimateGas
eth_sendTransaction
  Contract call:       <UnrecognizedContract>
  Transaction:         0xfc8f7f3e3b913d854c75a1556f668ef1734bdfe0fb4cc13d02e15619e2ed2b6f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            73332 of 73332
  Block #3:            0x9c42988e0fa23dc9a6d994bf2d68bd3f955882683babada6e041400ba31d9d55

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getLogs
eth_chainId
eth_getTransactionReceipt
eth_accounts (2)
eth_chainId
eth_estimateGas
eth_sendTransaction
  Contract call:       <UnrecognizedContract>
  Transaction:         0xe1f03b557903122b865b759f6002b4b1e1122c5a07db9e7a3a7e8aee34ded12f
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            73332 of 73332
  Block #4:            0xe64f1bfaee9d2f60d7675771cf40eca9de1408c9358d0a82d482c7f68a1f634d

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getLogs
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Transaction:         0xceb4fafb6684218d62865b73f5678d536f3f26154e3d22daf88f10675de766a3
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x2886de6bbd66db353c5ce2e91359e7c39c962fd7
  Value:               5 ETH
  Gas used:            21000 of 21001
  Block #5:            0xd7d37f24ca9cc60427dbb607e4c021e02c59fdd552e84096de7e9130d59c398a

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Transaction:         0x54215692683a5ee013523d3a88070ff6721ff7a918500ea2cf53523ba833bee7
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x3f4449eaa1817c1a91faf287812698f546835a2a
  Value:               2 ETH
  Gas used:            21000 of 21001
  Block #6:            0xadffb4ffd9398b4175f4607cb572d0b936f0bee1c69b6d23a9d1dc44aecbf1fb

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Transaction:         0xa038d2ce518a3f3c9e82aeee6d76d3e28c78f64a2a66fd1c1369dd73fcf1eb9d
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x8def03d7222a07f4933fe79834953d3644f44deb
  Value:               2 ETH
  Gas used:            21000 of 21001
  Block #7:            0x7d50c513d888ba855d080c2ba99805ad76acf827436611feb9fecd9b26a812be

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Transaction:         0xcaa2f0c61fe703172f794c2de914df68f0cf4f6967aac35ea5f6c55eda2457cb
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x34e9a78d63c9ca2148c95e880c6b1f48ae7f121e
  Value:               1 ETH
  Gas used:            21000 of 21001
  Block #8:            0x205f23c50f604255d3e0c6320c20857927a5cf023fa0878cece4315c0cd10f3c

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_accounts
eth_chainId
eth_estimateGas
eth_sendTransaction
  Transaction:         0xb9433d87bbab2761ab60b73ad9f954e55e4e949128a74a0f66951db4d6f9d511
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0xa46c4b41d72ada9d14157b28a8a2db97560fff12
  Value:               5 ETH
  Gas used:            21000 of 21001
  Block #9:            0x88729439b9e9de7a56376ce497e0000338d4f5ea62d4cd0f6c727a5a6e765717

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_gasPrice
eth_getBlockByNumber
eth_chainId
eth_getTransactionCount
eth_chainId
eth_estimateGas
eth_chainId
eth_sendRawTransaction
  Contract call:       <UnrecognizedContract>
  Transaction:         0x26d1eba85e0b4be4c2db820de0d88672dc11a1b409b6f3933d55be5318361857
  From:                0x2886de6bbd66db353c5ce2e91359e7c39c962fd7
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               1 ETH
  Gas used:            223865 of 226487
  Block #10:           0x1cf8116c86c1b0e23c848bb9cb4502932997803b38286360278913cade54598e

eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_gasPrice
eth_getBlockByNumber
eth_chainId
eth_getTransactionCount
eth_chainId
eth_estimateGas
eth_chainId
eth_sendRawTransaction
  Contract call:       <UnrecognizedContract>
  Transaction:         0xfa92d34fbd2c35cacf8ea2e7e453b23046c6a8263c33af634e6fe215a8122f03
  From:                0x8def03d7222a07f4933fe79834953d3644f44deb
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            71428 of 71428
  Block #11:           0x268e667d376ed50b9cee1c7916e9adccce627fb17d0d950853603cc382646fb0

eth_chainId
eth_getTransactionReceipt
eth_accounts (2)
eth_chainId
eth_estimateGas
eth_sendTransaction
  Contract call:       <UnrecognizedContract>
  Transaction:         0xb0eeca9276cfacc6914d00aca7095dfd0cff33976efe9918f4346be82309aaf9
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3
  Value:               0 ETH
  Gas used:            297798 of 297798
  Block #12:           0x9710998581851187c71f521d3f09e15743e4c55ab86884a2e98986bb0929cf88

eth_chainId
eth_getTransactionByHash
eth_chainId
eth_getTransactionReceipt
eth_chainId
eth_getLogs
```

1. Airnode execution


2. Client contract call

