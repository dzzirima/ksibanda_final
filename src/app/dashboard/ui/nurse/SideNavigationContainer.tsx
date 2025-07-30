

import { UserCircleIcon } from "@heroicons/react/20/solid";
import { TextField } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import findAllUsers from "../../actions/users/findAllUsers";
import NurseSideNav from "./SideNavigation";

export default async function NurseSideNavContainer() {
  // get all user patients from the database

   let users = await findAllUsers();


  return (
    <div className="flex flex-col">
      <div className="mt-4 w-full">

        <NurseSideNav users={users}/>
      </div>
    
    </div>
  );
}
