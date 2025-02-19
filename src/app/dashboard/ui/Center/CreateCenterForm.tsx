"use client"

import SubmitButton from "@/app/dashboard/ui/utils/SubmitButton";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useFormState } from "react-dom";
import {createCenterAction , State } from "@/app/dashboard/actions/centers/createCenterAction";
import { useActionState } from "react";

export default function CreateCenterForm() {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useActionState(createCenterAction, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-start mt-5 sm:mx-auto sm:w-full sm:max-w-sm gap-1">

        <Typography variant="h5" className="text-center"> Add New Center</Typography>

        <TextField
          name="centerName"
          size="small"
          variant="outlined"
          label="Center Name"
        />
        {state.errors?.centerName &&
          state.errors.centerName.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}
        <TextField
          name="phone"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Contact Phone"
        />
        {state.errors?.phone &&
          state.errors.phone.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="email"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Email"
        />
        {state.errors?.email &&
          state.errors.email.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="contactPerson"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Contact Person"
        />
        {state?.errors?.contactPerson &&
          state.errors.contactPerson.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="contactPersonPhone"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Contact Person Phone"
        />
        {state?.errors?.contactPersonPhone &&
          state.errors.contactPersonPhone.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="address"
          size="small"
          className="mt-2"
          variant="outlined"
          label="address"
          type="text"
        />
        {state?.errors?.address &&
          state.errors.address.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <div className="text-left">
          <label
            htmlFor="centerType"
            className="block mb-2 text-sm font-medium "
          >
            Center Type
          </label>
          <select
            id="role"
            name="role"
            className="bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            defaultValue={"hospital"}
          >
            
            <option value="hospital">
            hospital
            </option>
            <option value="clinic">clinic</option>
          
          </select>
        </div>
    
        <SubmitButton label={"Create"} size={17} />
      </div>
    </form>
  );
}
