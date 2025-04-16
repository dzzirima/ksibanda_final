"use server";

import dbConnect from "@/app/lib/dbConnect";
import { addAccessor } from "../../patients/test_scripts/test_new";
import approveRequestAccessDb from "./approve_request_acces_db";

export default async function approveRequestAccess(rowData: any) {
  try {
    await dbConnect();

    console.log("approving request  !!!!!");
    console.log(rowData);

    const {  requestorWalletId, patientWalletId } = rowData;

    await addAccessor(requestorWalletId, patientWalletId);

    // update db

    console.log("approving request !!!!!");


   let res =  await approveRequestAccessDb(rowData);
    
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error);
    return {
      errors: {},
      message: "Database Error: Failed to Create Request .",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard");
}
