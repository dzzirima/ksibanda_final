"use server";
import { z } from "zod";


import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/Users";


const FormSchema = z.object({

  email: z.string().min(1 ,"email cant be empty!!"),
  password: z.string().min(1 ,"password cant be empty!!"),

  
});

const Create = FormSchema.omit({ });

export type State = {
  errors?: {
    email?: String[];
    password?:String[];
  };
  message?: string | null;
};

export async function signInAction(prevState: State, formData: FormData) {

 
 
  const rawDataFromEntries = Object.fromEntries(formData.entries());

  

  const validateFields = Create.safeParse(rawDataFromEntries);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Misssing Fields . Failed to login  ",
    };
  }

  let formDataFields = validateFields.data;
  
  try {

    await dbConnect();

    let foundUser = await User.findOne({
      email: formDataFields.email,
      password: formDataFields.password,
    });


    


    //check if user exists
    if (!foundUser) {
      return {
        successs: false,
        errors: {},
        message: "Invalid Credentials failed to login",
        user: null,
      };

    }

    // if user exist store user in local storage

    let userData = {
      id: foundUser._id.toString(),
      email: foundUser.email,
      name: foundUser.name,
      lastName: foundUser.lastName,
      role: foundUser.role,
    };

    return {
      success: true,
        errors: {},
        message: "successfully logged in",
        user: userData,
      };

  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log(error);
    return {
      success: false,
      errors: {},
      message: "API Error: Failed to Login  Contact support",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  // revalidatePath("/dashboard");


  
}





