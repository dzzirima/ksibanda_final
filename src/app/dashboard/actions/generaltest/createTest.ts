"use server"

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dbConnect from "@/app/lib/dbConnect";
import Referal from "@/app/model/Refferal";
import GeneralTest from "@/app/model/GeneralTests";
// import {BackendInstance} from "@/app/service/axios"

// zod schema defination
function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const FormSchema = z.object({

  testFor: z.string().min(1 ,"testFor To cant be empty !!"),
  hospital: z.string().min(1 ,"Hospital cant be empty !!"),
  
  // date: z.string(),

});

const Create = FormSchema.omit({ });

export type State = {
  errors?: {
    testFor?: String[];
    hospital?:String[];
    
    
   
  };
  message?: string | null;
};

export async function createGeneralTestAction(prevState: State, formData: FormData) {


   const rawDataFromEntries = Object.fromEntries(formData.entries());

  
 
 
  
  const validateFields = Create.safeParse(rawDataFromEntries);

  console.log(validateFields);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to create  center ",
    };
  }
  
  try {
    
    await dbConnect();

    console.log("Creating General Test with data:", rawDataFromEntries);
    const generalTests = await GeneralTest.create(rawDataFromEntries);



  } catch (error) {
   
    console.log("error papa " +  error);
    return {
      errors: {},
      message: "Database Error: Failed to Create client .",
    };
  }

 
  redirect("/dashboard/");

  
}