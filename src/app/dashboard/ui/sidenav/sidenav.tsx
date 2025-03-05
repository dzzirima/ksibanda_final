"use client";
import Link from "next/link";
import CompanyLogo from "@/app/dashboard/ui/sidenav/logo";
import NavLinks from "@/app/dashboard/ui/sidenav/NavLinks";
import { PowerIcon } from "@heroicons/react/24/outline";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-1 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <CompanyLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            // 'use server';
            // await signOut({ redirectTo: '/' });
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">
              {"Connected: " +
                //@ts-ignore
                String(window.ethereum.selectedAddress).substring(0, 6) +
                "..." +
                //@ts-ignore
                String(window.ethereum.selectedAddress).substring(38)}
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
