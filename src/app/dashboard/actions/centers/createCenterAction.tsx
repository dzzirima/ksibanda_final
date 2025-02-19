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

  centerName: z.string().min(1 ,"centerName cant be empty !!"),
  phone: z.string().min(1 ,"phone cant be empty !!"),
  email: z.string().min(1 ,"email cant be empty !!"),


contactPerson: z.string().min(1 ,"Contact Person number cant be empty !!"),

  contactPersonPhone: z.string().min(1 ,"Contact Person Phone  cant be empty !!"),
  address: z.string().min(1 ,"address cant be empty !!"),
 

  centerType: z.enum(["hospital", "clinic"], {
    invalid_type_error: "Please select  centertype",
  }),
  // date: z.string(),

});

const Create = FormSchema.omit({ });

export type State = {
  errors?: {
    centerName?: String[];
    phone?:String[];
    email?:String[];
    contactPerson?: String[];
    contactPersonPhone?: String[];
    address?: String[];
    centerType?: String[];
   
  };
  message?: string | null;
};

export async function createCenterAction(prevState: State, formData: FormData) {
 
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