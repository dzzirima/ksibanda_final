require('dotenv').config();
const ethers = require('ethers');
const contract = require("");

export default function mintNFT() {

    // Get Alchemy App URL
    const API_KEY = process.env.API_KEY;
    
   
    const provider = new ethers.AlchemyProvider(network = "sepolia", API_KEY);
    
    

    
    // Create a signer
    const privateKey = process.env.PRIVATE_KEY
    const signer = new ethers.Wallet(privateKey, provider)
    
    // Get contract ABI and address
    const abi = contract.abi
    const contractAddress = '0x5D0063d846d2555f04A205A991547Cb6e544E322'
    
    // Create a contract instance
    const myNftContract = new ethers.Contract(contractAddress, abi, signer)
    
    // Get the NFT Metadata IPFS URL
    const tokenUri = "https://gateway.pinata.cloud/ipfs/QmYueiuRNmL4MiA2GwtVMm6ZagknXnSpQnB3z2gWbz36hP"
    
    // Call mintNFT function
    const mintNFT = async () => {
        let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
        await nftTxn.wait()
    
        console.log(nftTxn)
    
        console.log("**********************")
        console.log(`NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`)
    }
    
    mintNFT()
        .then(() => process.exit(0))
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });


}