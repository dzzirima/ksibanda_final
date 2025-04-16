"use server";

import dbConnect from "@/app/lib/dbConnect";
import AccessRequest from "@/app/model/AccessRequest";


export default async function approveRequestAccessDb(requestorWalletId:string,patientWalletId:string) {
  try {
    await dbConnect();

  

    // update the database
    await AccessRequest.updateOne(
      { requestorWalletId, patientWalletId },
      { $set: { status: "approved" } }
    );
   
    
    // console.log(createdRequest)
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log( "error while editing permision" +error);
    return {
      errors: {},
      message: "Database Error: Failed to Approve .",
    };
  }
}
