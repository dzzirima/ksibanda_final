
"use server";

import dbConnect from "@/app/lib/dbConnect";
import AccessRequest from "@/app/model/AccessRequest";

export const checkIfUserHasAccessToRecordsFromDb = async (requestorId:string, patientId:string) => {
  try {

    await dbConnect();
      let res = await  AccessRequest.findOne({
        requestorWalletId: requestorId,
        patientWalletId: patientId,
        status: "active",
      });

        if (res) {
            return { accessRes: true };
        } else {
            return { accessRes: false };
        }
    


  
  } catch (error) {
    console.error("Error checking user access:", error);
    return { accessRes: false };
  }
}