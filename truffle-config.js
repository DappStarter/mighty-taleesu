require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name riot mad million grace option equal gasp'; 
let testAccounts = [
"0xfdea1c17feea4af51d62d8b896ed9c1fad733395c2266dcdf7f815c100ae1806",
"0x33ea2d223d4b0d4986bbd25dd331d8a0e6c8c43af23443c9c3c35bd73b574ffa",
"0x138fbe37d5b77785784f2d176889b817466bdf986468ff25c50c5d464049aec9",
"0xa6e7a1612e6760c9a9184eb25609505e78ce637f47e0b88ad1718a6606acabea",
"0xd380412ec38a1d2abcb2c88c36e137986dcdbad2f3255248e70e6776bc0125d8",
"0x69584a6cd01c83a0aa606a0971190d9a9e082f1e5f479bfb10c617b7a0a52d39",
"0x44cc01a3abd70b988998fde15aea827ca1271e4e66ca7033ca6dd804dd1abf64",
"0x721c6e55a496d830f524e32cf5842fdb841899bd5649884c71bbe6fd70a499e5",
"0xe1a545966a5295ed8a225a467a4dbd5a915793221e941226d9b76902452373c2",
"0x1dcb2c5212b3ed51010d083508a5e660d455cacb01297fe51f3767d20743bab1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
