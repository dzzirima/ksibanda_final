import { UserCircleIcon } from "@heroicons/react/20/solid";
import { TextField } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";



interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  walletAddress: string;
}


export default async function NurseSideNav({
  users
}:{
  users:IUser[]
}) {
  // get all user patients from the database

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


      {users.map((patient) => {
        return (
          <Link
            key={`${patient.walletAddress}`}
            href={`nurse/${patient.walletAddress}/profile`}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-1 rounded-md bg-blue-100 p-1 m-1 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-1 md:px-1"
              //   {
              //     'bg-sky-100 text-blue-600': pathname === link.href,
              //   },
            )}
          >
            <UserCircleIcon className="w-6" />
            <p className="hidden md:block">{patient.firstName}</p>
          </Link>
        );
      })}
    </div>
  );
}

