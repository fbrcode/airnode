// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "./IRrpAuthorizer.sol";

<<<<<<< HEAD:packages/protocol/contracts/authorizers/interfaces/IClientWhitelistRrpAuthorizer.sol
interface IClientWhitelistRrpAuthorizer is IRrpAuthorizer {
  enum AdminRank {
    Unauthorized,
    Admin,
    SuperAdmin
  }

  struct WhitelistStatus {
    uint64 expirationTimestamp;
    bool whitelistPastExpiration; // Stored as 8 bits
  }
=======
interface IApi3Authorizer is IAuthorizer {
    // Unauthorized (0):  Cannot do anything
    // Admin (1):         Can extend whitelistings
    // Super admin (2):   Can set, extend, revoke whitelistings
    enum AdminStatus {
        Unauthorized,
        Admin,
        SuperAdmin
    }

    event SetMetaAdmin(address metaAdmin);

    event SetAdminStatus(address indexed admin, AdminStatus status);

    event RenouncedAdminStatus(address indexed admin);
>>>>>>> Prettify contracts:packages/protocol/contracts/authorizers/interfaces/IApi3Authorizer.sol

    event ExtendedWhitelistExpiration(
        bytes32 indexed airnodeId,
        address indexed clientAddress,
        uint256 expiration,
        address indexed admin
    );

    event SetWhitelistExpiration(
        bytes32 indexed airnodeId,
        address indexed clientAddress,
        uint256 expiration,
        address indexed admin
    );

<<<<<<< HEAD:packages/protocol/contracts/authorizers/interfaces/IClientWhitelistRrpAuthorizer.sol
  event SetWhitelistStatusPastExpiration(
    bytes32 indexed airnodeId,
    address indexed clientAddress,
    bool status,
    address indexed admin
  );

  function extendWhitelistExpiration(
    bytes32 airnodeId,
    address clientAddress,
    uint64 expirationTimestamp
  ) external;

  function setWhitelistExpiration(
    bytes32 airnodeId,
    address clientAddress,
    uint64 expirationTimestamp
  ) external;

  function setWhitelistStatusPastExpiration(
    bytes32 airnodeId,
    address clientAddress,
    bool status
  ) external;
=======
    event SetWhitelistStatus(
        bytes32 indexed airnodeId,
        address indexed clientAddress,
        bool status,
        address indexed admin
    );

    function setMetaAdmin(address _metaAdmin) external;

    function setAdminStatus(address admin, AdminStatus status) external;

    function renounceAdminStatus() external;

    function extendWhitelistExpiration(
        bytes32 airnodeId,
        address clientAddress,
        uint256 expiration
    ) external;

    function setWhitelistExpiration(
        bytes32 airnodeId,
        address clientAddress,
        uint256 expiration
    ) external;

    function setWhitelistStatus(
        bytes32 airnodeId,
        address clientAddress,
        bool status
    ) external;
>>>>>>> Prettify contracts:packages/protocol/contracts/authorizers/interfaces/IApi3Authorizer.sol
}
