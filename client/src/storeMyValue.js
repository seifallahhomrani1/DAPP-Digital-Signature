import web3 from './web3'; 

const address = '0xE11EbfA71cbb119b35d827FEa5FFC6A0D39Ba0Ca'; 

const abi = [
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "x",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

  export default new web3.eth.Contract(abi,address);