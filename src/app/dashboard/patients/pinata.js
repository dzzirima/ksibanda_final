require('dotenv').config();



import axios from "axios";

export const pinJSONToIPFS = async(JSONBody) => {

// const key = process.env.REACT_APP_PINATA_KEY;
// const secret = process.env.REACT_APP_PINATA_SECRET;


const key = '53155e448e535d28c481'
const secret = '7da3417c64c5c00e83e9ff4b29230d3fa9d87884a6406b1251413764bdfb1f1e'



    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    //making axios POST request to Pinata ⬇️
    return axios 
        .post(url, JSONBody, {
            headers: {
                pinata_api_key: key,
                pinata_secret_api_key: secret,
            }
        })
        .then(function (response) {

            
           return {
               success: true,
               pinataUrl: "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash
           };
        })
        .catch(function (error) {
            console.log(error)
            return {
                success: false,
                message: error.message,
            }
    });
};