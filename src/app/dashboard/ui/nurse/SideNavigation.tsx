"use client";

import { UserCircleIcon } from "@heroicons/react/20/solid";
import { TextField } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";

export default function NurseSideNav() {
  const patientList = [
    { name: "Tanaka Zirima", href: "/dashboard/nurse/12/profile" , patientId:1 },
    {
      name: "Mary Chinoda",
      href: "/dashboard/nurse/12/profile",
      patientId:2
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="mt-4 w-full"></div>
      <TextField
        name="centerName"
        size="small"
        variant="filled"
        placeholder={"Search Patient ...."}
        // label="Center Name"
      />

      {patientList.map((patient) => {
        return (
          <Link
            key={patient.name}
            href={patient.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-1 rounded-md bg-blue-100 p-1 m-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-1 md:px-1"
              //   {
              //     'bg-sky-100 text-blue-600': pathname === link.href,
              //   },
            )}
          >
            <UserCircleIcon className="w-6" />
            <p className="hidden md:block">{patient.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
