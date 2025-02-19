"use client"

import SubmitButton from "@/app/dashboard/ui/utils/SubmitButton";
import { Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useFormState } from "react-dom";
import { createUserAction, State } from "@/app/dashboard/actions/users/createUserAction";
import { useActionState } from "react";

export default function CreateUserForm() {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useActionState(createUserAction, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col justify-start mt-5 sm:mx-auto sm:w-full sm:max-w-sm gap-1">

        <Typography variant="h5" className="text-center"> Add New User</Typography>

        <TextField
          name="email"
          size="small"
          variant="outlined"
          label="Email"
        />
        {state.errors?.email &&
          state.errors.email.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}
        <TextField
          name="password"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Password"
        />
        {state.errors?.password &&
          state.errors.password.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="firstName"
          size="small"
          variant="outlined"
          className="mt-2"
          label="firstName"
        />
        {state.errors?.firstName &&
          state.errors.firstName.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="lastName"
          size="small"
          className="mt-2"
          variant="outlined"
          label="lastName"
        />
        {state?.errors?.lastName &&
          state.errors.lastName.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="phoneNumber"
          size="small"
          className="mt-2"
          variant="outlined"
          label="phoneNumber"
        />
        {state?.errors?.phoneNumber &&
          state.errors.phoneNumber.map((error) => (
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
            htmlFor="role"
            className="block mb-2 text-sm font-medium "
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            className="bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            defaultValue={"patient"}
          >
            
            <option value="patient">
              Patient
            </option>
            <option value="nurse">Nurse</option>
            <option value="doctor">Doctor </option>
            <option value="labtech">Lab Tech </option>

          
          </select>
        </div>
        

       

        <SubmitButton label={"Create"} size={17} />
      </div>
    </form>
  );
}
