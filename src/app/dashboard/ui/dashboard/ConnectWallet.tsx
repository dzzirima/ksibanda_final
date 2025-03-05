"use client";

import { useEffect, useState } from "react";

import {
  connectWallet,
  getCurrentWalletConnected,
 
} from "@/app/dashboard/patients/interact";

export default function ConnectWallet() {
  //State variables
  const [walletAddress, setWallet] = useState("");
 

  const connectWalletPressed = async () => {
    //TODO: implement
    const walletResponse = await connectWallet();
    //@ts-ignore
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };


  useEffect(() => {
    const fetchWalletAddress = async () => {
      const { address, status } = await getCurrentWalletConnected();
      setWallet(address);
      //@ts-ignore
      setStatus(status);
    };

    fetchWalletAddress();
  }, []);

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

    </div>
  );
}
