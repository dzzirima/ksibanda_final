"use client";

import SideNav from "@/app/dashboard/ui/sidenav/sidenav";
import ConnectWallet from "@/app/dashboard/ui/dashboard/ConnectWallet";

import {
  connectWallet,
  getCurrentWalletConnected,
 
} from "@/app/dashboard/patients/interact";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
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
        // setStatus(status);
      };
  
      fetchWalletAddress();
    }, []);


  return (
    <>
      {walletAddress.length  ? (
         <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
      ) : (
        <button id="walletButton" onClick={connectWalletPressed}>
        
          <span>Connect Wallet</span>
       
      </button>
      )}
    </>

   
  );
}
