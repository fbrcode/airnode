export { start, initializeProvider, callApi, processProviderRequests } from '@airnode/node';

export async function test() {
  return {
    body: `${process.env.MASTER_KEY_MNEMONIC} ${process.env.coinlayer_coinlayerSecurityScheme}`,
    statusCode: 200,
  };
}
