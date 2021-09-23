# PoC Execution Steps

0. Get AIRNODE fork, install yarn, compile airnode all packages

```sh
git clone git@github.com:fbrcode/airnode.git
cd airnode
npm install -g yarn
yarn run bootstrap
```

**Output:**

```txt
yarn run v1.22.11
$ yarn install && lerna bootstrap
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
[3/5] 🚚  Fetching packages...
[4/5] 🔗  Linking dependencies...
warning "workspace-aggregator-00264476-b143-4e63-8479-ffdb530f2589 > @api3/protocol > @typechain/ethers-v5@7.0.1" has unmet peer dependency "@ethersproject/bytes@^5.0.0".
warning "workspace-aggregator-00264476-b143-4e63-8479-ffdb530f2589 > @api3/protocol > @typechain/ethers-v5@7.0.1" has unmet peer dependency "@ethersproject/providers@^5.0.0".
warning "workspace-aggregator-00264476-b143-4e63-8479-ffdb530f2589 > @api3/protocol > @typechain/ethers-v5@7.0.1" has unmet peer dependency "@ethersproject/abi@^5.0.0".
warning "workspace-aggregator-00264476-b143-4e63-8479-ffdb530f2589 > @api3/protocol > hardhat-deploy@0.8.11" has unmet peer dependency "@ethersproject/hardware-wallets@^5.0.14".
warning "workspace-aggregator-00264476-b143-4e63-8479-ffdb530f2589 > @api3/protocol > hardhat-gas-reporter > eth-gas-reporter@0.2.22" has unmet peer dependency "@codechecks/client@^0.1.0".
[5/5] 🔨  Building fresh packages...
$ husky install && yarn run build
husky - Git hooks installed
$ lerna run build --stream
lerna notice cli v4.0.0
lerna info versioning independent
lerna info Executing command in 8 packages: "yarn run build"
@api3/ois: $ yarn run clean && yarn run compile
@api3/airnode-abi: $ yarn run clean && yarn run compile
@api3/protocol: $ yarn run build:contracts && yarn run build:tsc
@api3/ois: $ rimraf -rf ./dist
@api3/airnode-abi: $ rimraf -rf ./dist
@api3/protocol: $ hardhat compile
@api3/ois: $ tsc -p tsconfig.build.json
@api3/airnode-abi: $ tsc -p tsconfig.build.json
@api3/protocol: Solidity 0.8.6 is not fully supported yet. You can still use Hardhat, but some features, like stack traces, might not work correctly.
@api3/protocol: Learn more at https://hardhat.org/reference/solidity-support"
@api3/protocol: Nothing to compile
@api3/protocol: $ rimraf -rf ./dist && yarn build:contract-dts && yarn build:fix-contract-dts && yarn build:copy-contract-dts && tsc -p tsconfig.build.json
@api3/protocol: $ yarn typechain --target ethers-v5 --out-dir ./src/contracts './artifacts/contracts/**/!(*.dbg).json'
@api3/protocol: $ /Users/fabiobressler/job/inveniam/repos/fbrcode/airnode/node_modules/.bin/typechain --target ethers-v5 --out-dir ./src/contracts './artifacts/contracts/**/!(*.dbg).json'
@api3/adapter: $ yarn run clean && yarn run compile
@api3/adapter: $ rimraf -rf ./dist
@api3/adapter: $ tsc -p tsconfig.build.json
@api3/protocol: Successfully generated 48 typings!
@api3/protocol: $ echo "export { TypedEventFilter } from './commons'
@api3/protocol: " >> src/contracts/index.ts
@api3/protocol: $ copyfiles -u 1 "src/contracts/**/*.d.ts" dist/src
@api3/operation: $ yarn run clean && yarn run compile
@api3/admin: $ yarn run clean && yarn run compile
@api3/operation: $ rimraf -rf ./dist
@api3/admin: $ rimraf -rf ./dist
@api3/operation: $ tsc -p tsconfig.build.json
@api3/admin: $ tsc -p tsconfig.build.json
@api3/node: $ yarn run clean && yarn run compile
@api3/node: $ rimraf -rf ./dist
@api3/node: $ tsc -p tsconfig.build.json
@api3/deployer: $ yarn clean && yarn compile && yarn webpack && yarn copy:webpack && yarn copy:terraform
@api3/deployer: $ rimraf -rf ./dist
@api3/deployer: $ tsc -p tsconfig.build.json
@api3/deployer: $ webpack
@api3/deployer: asset handlers/aws/index.js 8.07 MiB [compared for emit] [minimized] (name: handlers/aws/index) 2 related assets
@api3/deployer: runtime modules 123 bytes 1 module
@api3/deployer: javascript modules 4.8 MiB
@api3/deployer:   modules by path ../../node_modules/ 4.12 MiB 1049 modules
@api3/deployer:   modules by path ../node/dist/ 313 KiB 72 modules
@api3/deployer:   modules by path ../protocol/dist/src/ 333 KiB 25 modules
@api3/deployer:   modules by path ../adapter/dist/ 29 KiB 15 modules
@api3/deployer:   modules by path ../airnode-abi/dist/*.js 9.32 KiB 5 modules
@api3/deployer:   modules by path ../ois/dist/*.js 1.2 KiB 2 modules
@api3/deployer: json modules 5.94 MiB
@api3/deployer:   modules by path ../../node_modules/aws-sdk/apis/*.json 5.69 MiB 619 modules
@api3/deployer:   modules by path ../protocol/dist/ 253 KiB 3 modules
@api3/deployer:   ../../node_modules/axios/package.json 1.99 KiB [built] [code generated]
@api3/deployer:   ../../node_modules/elliptic/package.json 1.11 KiB [built] [code generated]
@api3/deployer:   ../../node_modules/aws-sdk/lib/region_config_data.json 1.62 KiB [built] [code generated]
@api3/deployer: webpack 5.37.0 compiled successfully in 12245 ms
@api3/deployer: $ copyfiles .webpack/**/**/*.js dist/
@api3/deployer: $ copyfiles terraform/**/**/*.tf dist/
lerna success run Ran npm script 'build' in 8 packages in 39.8s:
lerna success - @api3/adapter
lerna success - @api3/admin
lerna success - @api3/airnode-abi
lerna success - @api3/deployer
lerna success - @api3/node
lerna success - @api3/ois
lerna success - @api3/operation
lerna success - @api3/protocol
lerna notice cli v4.0.0
lerna info versioning independent
lerna info bootstrap root only
[1/5] 🔍  Validating package.json...
[2/5] 🔍  Resolving packages...
success Already up-to-date.
$ husky install && yarn run build
husky - Git hooks installed
$ lerna run build --stream
lerna notice cli v4.0.0
lerna info versioning independent
lerna info Executing command in 8 packages: "yarn run build"
@api3/ois: $ yarn run clean && yarn run compile
@api3/airnode-abi: $ yarn run clean && yarn run compile
@api3/protocol: $ yarn run build:contracts && yarn run build:tsc
@api3/ois: $ rimraf -rf ./dist
@api3/airnode-abi: $ rimraf -rf ./dist
@api3/protocol: $ hardhat compile
@api3/ois: $ tsc -p tsconfig.build.json
@api3/airnode-abi: $ tsc -p tsconfig.build.json
@api3/protocol: Solidity 0.8.6 is not fully supported yet. You can still use Hardhat, but some features, like stack traces, might not work correctly.
@api3/protocol: Learn more at https://hardhat.org/reference/solidity-support"
@api3/protocol: Nothing to compile
@api3/protocol: $ rimraf -rf ./dist && yarn build:contract-dts && yarn build:fix-contract-dts && yarn build:copy-contract-dts && tsc -p tsconfig.build.json
@api3/protocol: $ yarn typechain --target ethers-v5 --out-dir ./src/contracts './artifacts/contracts/**/!(*.dbg).json'
@api3/protocol: $ /Users/fabiobressler/job/inveniam/repos/fbrcode/airnode/node_modules/.bin/typechain --target ethers-v5 --out-dir ./src/contracts './artifacts/contracts/**/!(*.dbg).json'
@api3/adapter: $ yarn run clean && yarn run compile
@api3/protocol: Successfully generated 48 typings!
@api3/adapter: $ rimraf -rf ./dist
@api3/protocol: $ echo "export { TypedEventFilter } from './commons'
@api3/protocol: " >> src/contracts/index.ts
@api3/protocol: $ copyfiles -u 1 "src/contracts/**/*.d.ts" dist/src
@api3/adapter: $ tsc -p tsconfig.build.json
@api3/admin: $ yarn run clean && yarn run compile
@api3/operation: $ yarn run clean && yarn run compile
@api3/admin: $ rimraf -rf ./dist
@api3/operation: $ rimraf -rf ./dist
@api3/admin: $ tsc -p tsconfig.build.json
@api3/operation: $ tsc -p tsconfig.build.json
@api3/node: $ yarn run clean && yarn run compile
@api3/node: $ rimraf -rf ./dist
@api3/node: $ tsc -p tsconfig.build.json
@api3/deployer: $ yarn clean && yarn compile && yarn webpack && yarn copy:webpack && yarn copy:terraform
@api3/deployer: $ rimraf -rf ./dist
@api3/deployer: $ tsc -p tsconfig.build.json
@api3/deployer: $ webpack
@api3/deployer: asset handlers/aws/index.js 8.07 MiB [compared for emit] [minimized] (name: handlers/aws/index) 2 related assets
@api3/deployer: runtime modules 123 bytes 1 module
@api3/deployer: javascript modules 4.8 MiB
@api3/deployer:   modules by path ../../node_modules/ 4.12 MiB 1049 modules
@api3/deployer:   modules by path ../node/dist/ 313 KiB 72 modules
@api3/deployer:   modules by path ../protocol/dist/src/ 333 KiB 25 modules
@api3/deployer:   modules by path ../adapter/dist/ 29 KiB 15 modules
@api3/deployer:   modules by path ../airnode-abi/dist/*.js 9.32 KiB 5 modules
@api3/deployer:   modules by path ../ois/dist/*.js 1.2 KiB 2 modules
@api3/deployer: json modules 5.94 MiB
@api3/deployer:   modules by path ../../node_modules/aws-sdk/apis/*.json 5.69 MiB 619 modules
@api3/deployer:   modules by path ../protocol/dist/ 253 KiB 3 modules
@api3/deployer:   ../../node_modules/axios/package.json 1.99 KiB [built] [code generated]
@api3/deployer:   ../../node_modules/elliptic/package.json 1.11 KiB [built] [code generated]
@api3/deployer:   ../../node_modules/aws-sdk/lib/region_config_data.json 1.62 KiB [built] [code generated]
@api3/deployer: webpack 5.37.0 compiled successfully in 12326 ms
@api3/deployer: $ copyfiles .webpack/**/**/*.js dist/
@api3/deployer: $ copyfiles terraform/**/**/*.tf dist/
lerna success run Ran npm script 'build' in 8 packages in 40.2s:
lerna success - @api3/adapter
lerna success - @api3/admin
lerna success - @api3/airnode-abi
lerna success - @api3/deployer
lerna success - @api3/node
lerna success - @api3/ois
lerna success - @api3/operation
lerna success - @api3/protocol
✨  Done in 185.09s.
```

1. Mock API with standalone server

```sh
cd packages/operations
yarn run dev:api
```

**Output**:

```txt
Server is running at http://localhost:3333
...
```

**cURL to capture output**:

```sh
curl -X 'GET' \
  'http://localhost:3333/v1/sensor/31d42f54-ef12-4c83-a5be-19a87368b648' \
  -H 'accept: application/json' | \
  node -e "console.log( JSON.stringify( JSON.parse(require('fs').readFileSync(0) ), 0, 1 ))"
```

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

2. Get Swagger Editor fork, launch OAS editor for API

```sh
git clone git@github.com:fbrcode/swagger-editor.git
cd swagger-editor
npm run dev
```

**Output**:

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

3. OIS Setup


4. Airnode execution


5. Client contract call

