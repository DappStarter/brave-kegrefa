require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove razor oven erosion grid another army genre'; 
let testAccounts = [
"0x6a6a8737d401ddf5e39dc0d05f3210265035b0cbbd825749cc0e4ff9bb20de5e",
"0xf2b36c53ceacabc580d3837e81187c7d1a872d424a3d6ef620f663325064088d",
"0x3f941130ddd71b92b3bed265c878ebc5f642df1bebad6a0f7240973c0ef51005",
"0x69f6b45752b3bd7909c67184512da4c221abd591782a54c6c0e803875c380475",
"0x7149b92a88df5d0010a3692bae4e689f89c8b93728590808c11239f522bf2142",
"0xab8c090b3b4c0c4ddfb9758db03654d19ff1a201635652a3fe773d2ffbb7f4b5",
"0x4abd3fb39a76ab16daf3c7fa90818583b599d7a365214ae95f7bf9f21971a53b",
"0x2e3b04101670e26159a5ae64dfbb699f6c35ac0a2e53f18ebcff30ace3204111",
"0xc589283e4f1c39ef9e1b0af83397ee82fe436d47a634815e940121042e59af28",
"0x1b541ed2f88eae6f68f3d7dccc33dacb178927fc20bec7926c0e03560c34c115"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
