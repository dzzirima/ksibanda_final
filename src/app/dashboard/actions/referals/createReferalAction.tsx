"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
// import {BackendInstance} from "@/app/service/axios"

// zod schema defination
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FormSchema = z.object({

  referalTo: z.string().min(1 ,"Referal To cant be empty !!"),
  hospital: z.string().min(1 ,"Hospital cant be empty !!"),
  specialist: z.string().min(1 ,"Specialist cant be empty !!"),


  referrerName: z.string().min(1 ,"Referrer Name  cant be empty !!"),

  usualDoctor: z.string().min(1 ,"UsualDoctor   cant be empty !!"),
  clinicName: z.string().min(1 ,"Clinic Name cant be empty !!"),
 

  address: z.string().min(1 ,"Address   cant be empty !!"),
  phoneNumber: z.string().min(1 ,"PhoneNumber  cant be empty !!"),

  referalDetails: z.string().min(1 ,"Referal Details   cant be empty !!"),
  
  requestAccess: z.enum(["NO", "YES"], {
    invalid_type_error: "Do you want access to records",
  }),
  // date: z.string(),

});

const Create = FormSchema.omit({ });

export type State = {
  errors?: {
    referalTo?: String[];
    hospital?:String[];
    
    specialist?:String[];
    referrerName?: String[];
    usualDoctor?: String[];
    address?: String[];
    phoneNumber?: String[];
    

    referalDetails?: String[];
    requestAccess?: String[];
    // address?: String[];
    clinicName?: String[];
   
  };
  message?: string | null;
};

export async function createReferalAction(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  

  const validateFields = Create.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create  center ",
    };
  }

  let formDataFields = validateFields.data;
  

 // try {
   


//   let createClientRes = await BackendInstance.post("/client" , clientObject)


//   if(createClientRes.status != 201){
//     return {
//       message: 'API  Failed to Create Invoice.',
//     };
//   }
//   } catch (error) {
//     // If a database error occurs, return a more specific error.
//     return {
//       message: 'Database Error: Failed to Create client .',
//     };
//   }

    // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard");
  redirect("/dashboard/query");
  
}