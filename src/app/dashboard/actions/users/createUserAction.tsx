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

  email: z.string().min(1 ,"email cant be empty !!"),
  password: z.string().min(1 ,"password cant be empty !!"),
  firstName: z.string().min(1 ,"first name cant be empty !!"),
  lastName: z.string().min(1 ,"last name cant be empty !!"),

//   phoneNumber: z.coerce.number().gt(0, {
//     message: "phone number should be greater than zero",
//   }),
phoneNumber: z.string().min(1 ,"phone number cant be empty !!"),

  address: z.string().min(1 ,"address cant be empty !!"),
 
  
 
  role: z.enum(["patient", "nurse","doctor", "labtech"], {
    invalid_type_error: "Please select an invoice status",
  }),
  // date: z.string(),

});

const CreateClient = FormSchema.omit({ });

export type State = {
  errors?: {
    email?: String[];
    password?:String[];
    firstName?:String[];
    lastName?: String[];
    phoneNumber?: String[];
    address?: String[];
    role?: String[];
   
  };
  message?: string | null;
};

export async function createUserAction(prevState: State, formData: FormData) {
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  

  const validateFields = CreateClient.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create User ",
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