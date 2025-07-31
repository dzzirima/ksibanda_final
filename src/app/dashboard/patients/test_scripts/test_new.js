import { ethers } from "ethers";
import CONTRACT_ABI from "../contract-abi.json";
import approveRequestAccessDb, { revokeRequestAccessDb } from "../../actions/AccessRequest/approve_request_acces_db";
// const CONTRACT_ADDRESS = "0xA206B4c1C89649c8a9a6458fadE195D7D9Af076e";
import { contractAddress as CONTRACT_ADDRESS   } from "../interact";

// import dbConnect from "@/app/lib/dbConnect";
// import AccessRequest from "@/app/model/AccessRequest";




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

export const checkIfHasAccess = async () => {
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
    
  
    const tx = await contract.canAcccess(window.ethereum.selectedAddress ,window.ethereum.selectedAddress )
    console.log("Transaction details:" + tx.toString());
    return tx;

  } catch (error) {
    console.error("Error calling contract function:", error);
    return false;
  }
};


export const addAccessor = async (requestorWalletId,patientWalletId) => {
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
    const tx = await contract.addAccessors(requestorWalletId, window.ethereum.selectedAddress);

    console.log(tx);

    console.log("Transaction confirmed:", tx);
    

    let upUpdateRes = await  approveRequestAccessDb(requestorWalletId,patientWalletId);
    return "Access granted successfully";


    // upate db 
   

  } catch (error) {
    console.error("Error granting access", error);
    return "Error granting access";
  }
};


export const revokeAccessor = async (requestorWalletId,patientWalletId) => {
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
    const tx = await contract.removeAccessor(requestorWalletId, window.ethereum.selectedAddress);

    console.log(tx);

    console.log("Transaction confirmed:", tx);
    

    let upUpdateRes = await  revokeRequestAccessDb(requestorWalletId,patientWalletId);
    return "Access Revoked successfully";


    // upate db 
   

  } catch (error) {
    console.error("Error granting access", error);
    return "Error granting access";
  }
};



