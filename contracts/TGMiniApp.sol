// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

/**
 * @title Telegram Miniapp Auth Example
 * @notice This contract provides a sample structure for HMAC-SHA256 hashing 
 * using an internal function for Telegram mini-app authentication.
 */
contract TGMiniapp {

    function hmacsha256(bytes memory key, bytes memory message) public pure returns (bytes32) {
        bytes32 keyl;
        bytes32 keyr;

        // Process the key to fit into SHA256 block size (64 bytes)
        if (key.length > 64) {
            keyl = sha256(key);
        } else {
            for (uint i = 0; i < key.length && i < 32; i++) {
                keyl |= bytes32(uint256(uint8(key[i])) << (8 * (31 - i)));
            }
            for (uint i = 32; i < key.length && i < 64; i++) {
                keyr |= bytes32(uint256(uint8(key[i])) << (8 * (63 - i)));
            }
        }

        // Define HMAC inner and outer padding
        bytes32 ipad = 0x3636363636363636363636363636363636363636363636363636363636363636;
        bytes32 opad = 0x5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c;

        // Calculate inner hash: sha256((key ^ ipad) || message)
        bytes32 innerHash = sha256(abi.encodePacked((keyl ^ ipad), (keyr ^ ipad), message));

        // Calculate final HMAC hash: sha256((key ^ opad) || innerHash)
        return sha256(abi.encodePacked((keyl ^ opad), (keyr ^ opad), innerHash));
    }
    
    function generator(bytes memory apiToken, bytes memory dataToCheck) public pure returns (bytes32) {
        // Step 1: Derive the secret key using HMAC with "WebAppData" as the key
        bytes memory webAppData = "WebAppData";
        bytes32 secretKey = hmacsha256(webAppData, apiToken);

        // Step 2: Compute HMAC-SHA256 for the provided data
        bytes32 calculatedHash = hmacsha256(abi.encodePacked(secretKey), dataToCheck);

        // Step 3: Compare the calculated hash with the original hash (convert to bytes for comparison)
        return calculatedHash;
    }


    function verfi( bytes memory dataToCheck, bytes32 originalHash)public pure returns (bool) {
        bytes memory apiToken = "7345436863:AAEmX6xHMCbD6IgQVIWU_lw33SHRlyrC6vA"; //Try set it visibility permission control
        bytes32 ret = generator( apiToken, dataToCheck);
        return ret == originalHash;
    }
}
