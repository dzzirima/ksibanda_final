"use client";

import SubmitButton from "@/app/dashboard/ui/utils/SubmitButton";
import {
  TextField,
  Typography,
} from "@mui/material";

import {
  createMedicationAction,
  State,
} from "@/app/dashboard/actions/medication/createMedicationAction";
import { useActionState } from "react";

export default function MedicationForm({ users }: { users: any }) {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useActionState(createMedicationAction, initialState);

  return (
    <form action={dispatch} className="m-4">
      <div className="flex flex-col justify-start mt-5 sm:mx-auto sm:w-full sm:max-w-full gap-1">
        <Typography variant="h5" className="text-center">
  
          New Medication
        </Typography>

        <select
          id="patientWalletAddress"
          name="patientWalletAddress"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select Patient
          </option>
          {users.map((user: any) => (
            <option key={user.walletAddress} value={user.walletAddress}>
              {user.firstName + " " + user.lastName}
            </option>
          ))}
        </select>

        <TextField
          name="nextVisit"
          size="small"
          type="date"
          variant="outlined"
          helperText = "Next Visit"
          className="mt-2"
        />

        {state.errors?.nextVisit &&
          state.errors.nextVisit.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="topic"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Topic"
        />
        {state.errors?.topic &&
          state.errors.topic.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <SubmitButton label={"Create"} size={17} />
      </div>
    </form>
  );
}
