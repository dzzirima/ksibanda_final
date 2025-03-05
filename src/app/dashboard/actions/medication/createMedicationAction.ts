"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import dbConnect from "@/app/lib/dbConnect";
import Medication from "@/app/model/Medication";
// import {BackendInstance} from "@/app/service/axios"


const FormSchema = z.object({

  patientWalletAddress: z.string().min(1 ," Select the patient"),
  topic: z.string().min(1 ,"Topic To cant be empty !!"),
  nextVisit: z.string().min(1 ,"Next Visit To cant be empty !!"),

  // date: z.string(),

});

const Create = FormSchema.omit({ });

export type State = {
  errors?: {
    patientWalletAddress?: String[];
    topic?: String[];
    nextVisit?: String[];
   
   
  };
  message?: string | null;
};

export async function createMedicationAction(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());
  // console.log(rawDataFromEntries)


  const validateFields = Create.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create  center ",
    };
  }

  let formDataFields = validateFields.data;


  
  try {
    
    await dbConnect();
    const referal = await Medication.create(formDataFields);

    console.log(referal)

  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error);
    return {
      errors: {},
      message: "Database Error: Failed to Create client .",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard");
  redirect("/dashboard/");

  
}