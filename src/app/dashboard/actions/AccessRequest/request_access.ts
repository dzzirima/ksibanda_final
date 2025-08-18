"use server"
import dbConnect from "@/app/lib/dbConnect";
import AccessRequest from "@/app/model/AccessRequest";
import { redirect } from "next/navigation";

export default async function requestAccess(
  requestorId: String,
  patientId: String,
  status:string
) {
  try {

    console.log("Requesting access for patient:", patientId + " by user:", requestorId);
    await dbConnect();

    let createdRequest = await AccessRequest.create({
      requestorWalletId:requestorId,
      patientWalletId:patientId,
      status
    });

    // console.log(createdRequest)
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
  redirect("/dashboard/");
}
