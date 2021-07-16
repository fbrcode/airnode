// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

<<<<<<< HEAD:packages/protocol/contracts/authorizers/interfaces/IRrpAuthorizer.sol
interface IRrpAuthorizer {
  // solhint-disable-next-line func-name-mixedcase
  function AUTHORIZER_TYPE() external view returns (uint256);
=======
interface IAuthorizer {
    function authorizerType() external view returns (uint256);
>>>>>>> Prettify contracts:packages/protocol/contracts/authorizers/interfaces/IAuthorizer.sol

    function isAuthorized(
        bytes32 requestId,
        bytes32 airnodeId,
        bytes32 endpointId,
        address requester,
        address designatedWallet,
        address clientAddress
    ) external view returns (bool);
}
