"use client";

import SideNav from "@/app/dashboard/ui/sidenav/sidenav";
import ConnectWallet from "@/app/dashboard/ui/dashboard/ConnectWallet";


import { useEffect, useState } from "react";
import { getCurrentLoginUser } from "./actions/auth/getCurrentLoginUser";

export default function Layout({ children }: { children: React.ReactNode }) {
   const [user, setUser] = useState("");


  

  

   useEffect(() => {
      const currentLoginUser = async () => {
        const userRes  = await getCurrentLoginUser();
       
        setUser(userRes);
        //@ts-ignore
        // setStatus(status);
      };
  
      currentLoginUser();
    }, []);



    

  return (
    <>
      {!user ? (
        <div className="flex h-screen items-center justify-center">
          <button
            id="walletButton"
            onClick={() => window.location.href = "/login"}
           
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg"
          >
            <span> Login to your account</span>
          </button>
        </div>
      ) : (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      )}
    </>

   
  );
}
