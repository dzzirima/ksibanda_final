"use client";

import TopAnalyis from "@/app/dashboard/ui/dashboard/TopAnalysis";
import BottomAnalysis from "@/app/dashboard/ui/dashboard/BottomAnalysis";
import { useEffect, useState } from "react";
import { checkIfUserHasMinted, mintNFT } from "./patients/interact";

export default function HomePage() {

  

  const [hasMinted, setMint] = useState<boolean>(false);

  //mintnft
  const handleMint = async () => {
    try {
      const result = await mintNFT("some-metadata-url", "NFT", "Description"); // Replace with actual metadata URL
      console.log("NFT Minted Successfully:", result);
      setMint(true);
    } catch (error) {
      console.error("Error minting NFT:", error);
      setMint(false);
    }
  };


  // Check if the user has minted an NFT


  const checkIfUserMinted = async () => {
    try {
      const userHasMinted = await checkIfUserHasMinted();
      console.log("User has minted:", userHasMinted);
      if (userHasMinted.nftId === '111' || userHasMinted.nftId === 111) {
        setMint(false);
      } else {
        setMint(true);
      }
    } catch (error) {
      console.error("Error checking if user has minted:", error);
      setMint(false);
    }
  };

useEffect(() => {
    const fetchData = async () => {
      await checkIfUserMinted();
    };
    fetchData();
  }, []); 



  return (
    <div className="flex flex-col p-3">
      {hasMinted ? (
        <div className="text-red-500">
          <div className="">
            <TopAnalyis />
          </div>
          <div className="">
            <BottomAnalysis />
          </div>
        </div>
      ) : (
        <div className="text-green-500">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleMint}
          >
            mint Nft
          </button>
        </div>
      )}
    </div>
  );
}
