import { ethers } from "ethers";
import CONTRACT_ABI from "../contract-abi.json";
const CONTRACT_ADDRESS = "0x0149346eAaa208b65B338a5a5814B228C9030eBa";

async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return;
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []); // Request user accounts
    const signer = await provider.getSigner();

    console.log("Connected Wallet:", await signer.getAddress());
    return signer;
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

export const test_2 = async () => {
  const signer = await connectWallet();
  if (!signer) return;

  try {
    // Connect to the contract
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    // Call the mint function
    const tx = await contract.hasAccess(26, window.ethereum.selectedAddress);

    console.log(tx);

    console.log("Transaction confirmed:", receipt);
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};


export const addAccessor = async () => {
  const signer = await connectWallet();
  if (!signer) return;

  try {
    // Connect to the contract
    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      signer
    );

    // Call the mint function
    const tx = await contract.addAccessor(0, window.ethereum.selectedAddress);

    console.log(tx);

    console.log("Transaction confirmed:", receipt);
  } catch (error) {
    console.error("Error calling contract function:", error);
  }
};
