"use server";
import dbConnect from "@/app/lib/dbConnect";
import AccessRequest from "@/app/model/AccessRequest";
import { redirect } from "next/navigation";

export default async function findRequestByWalletid(
  patientWalletId
 
) {
  try {
    await dbConnect();
    

    let request = await AccessRequest.find({
      patientWalletId:patientWalletId
    })

    let ressults  = request.map((request) =>{
      return{
        requestorWalletId : request.requestorWalletId,
        patientWalletId : request.patientWalletId,
        "status" : request.status,
        id: request._id.toString()
      }
    })
 
    return  ressults

    // console.log(createdRequest)
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error)

    return []
    
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard");
  redirect("/dashboard/");
}
