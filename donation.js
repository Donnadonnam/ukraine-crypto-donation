const { ethers } = require("ethers") 



const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
//const addrKovan = "0x9326BFA02ADD2366b30bacB125260Af641031331"
const addrMainnet = "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"
const priceFeed = new ethers.Contract(addrMainnet, aggregatorV3InterfaceABI, provider)



let accounts = [];

async function send25Dollars(){

    accounts = await ethereum.request({method: "eth_requestAccounts"});
    const amount = 25;
    const ETHUSDConversion = priceFeed.latestRoundData().then((roundData) => {return BigInt(roundData.answer);});
    const priceConversion = await ETHUSDConversion;

    const totalValue = BigInt(amount*10**8*10**18)/(priceConversion);

    const transactionParameters = {
        to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
        from: accounts[0],
        value: ethers.utils.hexlify(totalValue),
    };

    await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });

    document.getElementById('ETHUSD').textContent = `Thank you for donating ${amount}$ in ether!!!`;

}

async function send50Dollars(){
  
  accounts = await ethereum.request({method: "eth_requestAccounts"});
  const amount = 50;
  const ETHUSDConversion = priceFeed.latestRoundData().then((roundData) => {return BigInt(roundData.answer);});
  const priceConversion = await ETHUSDConversion;

  const totalValue = BigInt(amount*10**8*10**18)/(priceConversion);

  const transactionParameters = {
      to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
      from: accounts[0], 
      value: ethers.utils.hexlify(totalValue),
  };

  await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
  });

  document.getElementById('ETHUSD').textContent = `Thank you for donating ${amount}$ in ether!!!`;

}

async function send100Dollars(){
  
  accounts = await ethereum.request({method: "eth_requestAccounts"});
  const amount = 100;
  const ETHUSDConversion = priceFeed.latestRoundData().then((roundData) => {return BigInt(roundData.answer);});
  const priceConversion = await ETHUSDConversion;

  const totalValue = BigInt(amount*10**8*10**18)/(priceConversion);

  const transactionParameters = {
      to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
      from: accounts[0], 
      value: ethers.utils.hexlify(totalValue),
  };

  await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
  });

  document.getElementById('ETHUSD').textContent = `Thank you for donating ${amount}$ in ether!!!`;

}

async function sendAmountDollars(){
  
  accounts = await ethereum.request({method: "eth_requestAccounts"});
  const amount = document.getElementById("amountDollars").value;
  const ETHUSDConversion = priceFeed.latestRoundData().then((roundData) => {return BigInt(roundData.answer);});
  const priceConversion = await ETHUSDConversion;

  const totalValue = BigInt(amount*10**8*10**18)/(priceConversion);

  const transactionParameters = {
      to: '0x165CD37b4C644C2921454429E7F9358d18A45e14',
      from: accounts[0], 
      value: ethers.utils.hexlify(totalValue),
  };

  await ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
  });

  document.getElementById('ETHUSD').textContent = `Thank you for donating ${amount}$ in ether!!!`;

}


async function connect() {
    if (typeof window.ethereum !== "undefined") {
       accounts = await ethereum.request({method: "eth_requestAccounts"});
    }
}



module.exports = {
    connect,
    send25Dollars,
    send50Dollars,
    send100Dollars,
    sendAmountDollars,
};
