
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
import { pinJSONToIPFS } from "./pinata.js";
import { ethers } from "ethers";
const alchemyKey = "https://eth-sepolia.g.alchemy.com/v2/c-4sRjDS8v-wgYweeU6RcON2fs7-Z4js"



const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("./contract-abi.json");
const contractAddress = "0x0149346eAaa208b65B338a5a5814B228C9030eBa";

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const addWalletListener = () => {
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length > 0) {
        setWallet(accounts[0]);
        setStatus("👆🏽 Write a message in the text-field above.");
      } else {
        setWallet("");
        setStatus("🦊 Connect to Metamask using the top right button.");
      }
    });
  } else {
    setStatus(
      <p>
        {" "}
        🦊{" "}
        <a target="_blank" href={`https://metamask.io/download.html`}>
          You must install Metamask, a virtual Ethereum wallet, in your browser.
        </a>
      </p>
    );
  }
};

// minting
export const mintNFT = async (url, name, description) => {
  //error handling
  if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
    return {
      success: false,
      status: "❗Please make sure all fields are completed before minting.",
    };
  }

  //make metadata
  const metadata = new Object();
  metadata.name = name;
  metadata.image = url;
  metadata.description = description;

  console.log("from mintNFT");

  //pinata pin request
  const pinataResponse = await pinJSONToIPFS(metadata);

  console.log('from pinata')

  console.log(pinataResponse)
  if (!pinataResponse.success) {
    return {
      success: false,
      status: "😢 Something went wrong while uploading your tokenURI.",
    };
  }
  const tokenURI = pinataResponse.pinataUrl;




window.contract = await new web3.eth.Contract(contractABI, contractAddress);

console.log(" 1" )


const transactionParameters = {
  to: contractAddress, // Required except during contract publications.
  from: window.ethereum.selectedAddress, // must match user's active address.
  data: window.contract.methods
    .mintNFT(window.ethereum.selectedAddress, tokenURI)
    .encodeABI(),
};


try {

  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });

  console.log(txHash)

  return {
    success: true,
    status:
      "✅ Check out your transaction on Etherscan: https://sepolia.etherscan.io/tx/" +
      txHash,
  };

  
} catch (error) {

  console.log(error)

  return {
    success: false,
    status: "😥 Something went wrong: " + error.message,
  };

}

  
};


// checking if patient has minted their NFT


export const addAccessor_2 = async () => {

  console.log("from checkIfAllowed")

  window.contract = await new web3.eth.Contract(contractABI, contractAddress);

console.log(" checking access !!" )


const transactionParameters = {
  to: contractAddress, // Required except during contract publications.
  from: window.ethereum.selectedAddress, // must match user's active address.
  data: window.contract.methods
    .addAccessor(0,window.ethereum.selectedAddress)
    .encodeABI(),
};


try {

  const txHash = await window.ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });

  console.log(txHash)

  return {
    success: true,
    status:
      "✅ Check out your transaction on Etherscan: https://sepolia.etherscan.io/tx/" +
      txHash,
  };

  
} catch (error) {

  console.log(error)

  return {
    success: false,
    status: "😥 Something went wrong: " + error.message,
  };

}

  
}
