'use server';

import { Network, Alchemy } from 'alchemy-sdk';


const alchemyKey = "https://eth-sepolia.g.alchemy.com/v2/c-4sRjDS8v-wgYweeU6RcON2fs7-Z4js"
const apiKey = 'c-4sRjDS8v-wgYweeU6RcON2fs7-Z4js'
// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: apiKey, // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};

const alchemy = new Alchemy(settings);

const contractAddress = "0x5D0063d846d2555f04A205A991547Cb6e544E322";


export const checkIfMinted = async (currentOwner) => {
  try {

    console.log("Checking if minted")
    // let minted = await alchemy.nft.getNftsForContract(contractAddress)
    

    let minted = await alchemy.nft.getNftsForOwner(currentOwner)

    console.log(minted)

    
    // minted.nfts.map(nft => console.log(nft.mint?.mintAddress))

    // minted.nfts.map(nft => console.log(nft.mint?.mintAddress))


    // check  ownership

  // Safe Haven Token ID
  const tokenId = 0;

  // Get owner of NFT
  const owner = await alchemy.nft.getOwnersForNft(contractAddress, tokenId);
  console.log(owner)


  // add accessor
  // const accessor = "0x5D0063d846d2555f04A205A991547Cb6e544E322";


    console.log("Minted")
  } catch (error) {
    console.log(error)
  }
}

//   try {
//     let currentOwnersResponse = await alchemy.nft.getOwnersForContract(
//         contractAddress
//       );

//    console.log(currentOwnersResponse)
    
//   } catch (error) {
//     console.log(error)

    
//   }