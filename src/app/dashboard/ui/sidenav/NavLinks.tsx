"use client";

import {
  UserGroupIcon,
  HomeIcon,
  CalendarIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";
import findUserByWalletId from "../../actions/users/findUserByWalletId";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon,
    authorizedRoles: ["nurse" , "doctor", "lab", "patient", "admin"],
  },
  {
    name: "Patients",
    href: "/dashboard/patients",
    authorizedRoles: ["patient"],
    icon: UserCircleIcon,
  },
  {
    name: "Nurse",
    href: "/dashboard/nurse",
    icon: UserCircleIcon,
    authorizedRoles: ["nurse"],
  },
  {
    name: "Doctor",
    href: "/dashboard/doctor",
    icon: UserCircleIcon,
    authorizedRoles: ["doctor"],
  },
  {
    name: "Lab",
    href: "/dashboard/lab",
    authorizedRoles: ["lab"],
    icon: BeakerIcon,
  },
  {
    name: "Calender",
    href: "/dashboard/calender",
    icon: CalendarIcon,
    authorizedRoles: ["lab"],
  },
  {
    name: "Help",
    href: "/dashboard/help",
    icon: ChatBubbleBottomCenterTextIcon,
    authorizedRoles: ["lab"],
  },
  {
    name: "Admin",
    href: "/dashboard/admin",
    icon: UserGroupIcon,
    authorizedRoles: ["admin"],
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  const [userDetails, setUserDetails] = useState<any>(null);

  useEffect(() => {
    const getLoginUser = async () => {
      try {
        //@ts-ignore
        let foundPatientDetails = await findUserByWalletId(
          window.ethereum.selectedAddress
        );

        //@ts-ignore
        console.log("from nav links : " + foundPatientDetails?.role);

        setUserDetails(foundPatientDetails);
      } catch (error) {
        console.log("error", error);
      }
    };

    getLoginUser();
  }, []);

  return (
    <>
      {links
        .filter((link) => {
          // If userDetails is not loaded yet, show nothing (or you can show a loader)
          if (!userDetails) return false;
          // If authorizedRoles is empty, allow all roles
          if (!link.authorizedRoles || link.authorizedRoles.length === 0) return true;
          // Otherwise, only show if user's role is in authorizedRoles
          return link.authorizedRoles.includes(userDetails.role);
        })
        .map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "flex h-[40px] grow items-center justify-center gap-1 rounded-md bg-gray-50 p-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-1 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
    </>
  );
}
