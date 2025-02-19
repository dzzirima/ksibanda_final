"use client";

import SubmitButton from "@/app/dashboard/ui/utils/SubmitButton";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

import {
  createReferalAction,
  State,
} from "@/app/dashboard/actions/referals/createReferalAction";
import { useActionState } from "react";

export default function ReferralForm() {
  const initialState: State = { message: "", errors: {} };

  const [state, dispatch] = useActionState(createReferalAction, initialState);

  return (
    <form action={dispatch} className="m-4">
      <div className="flex flex-col justify-start mt-5 sm:mx-auto sm:w-full sm:max-w-sm gap-1">
        <Typography variant="h5" className="text-center">
          {" "}
          New Referal
        </Typography>

        <TextField
          name="referalTo"
          size="small"
          variant="outlined"
          label="referalTo"
        />
        {state.errors?.referalTo &&
          state.errors.referalTo.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}
        <TextField
          name="hospital"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Hospital"
        />
        {state.errors?.hospital &&
          state.errors.hospital.map((error) => (
            <p className="mt-2 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="specialist"
          size="small"
          variant="outlined"
          className="mt-2"
          label="Specialist"
        />
        {state.errors?.specialist &&
          state.errors.specialist.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <Divider> Referrer Details</Divider>

        <TextField
          name="referrerName"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Referrer Name"
        />
        {state?.errors?.referrerName &&
          state.errors.referrerName.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="usualDoctor"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Usual Doctor"
        />
        {state?.errors?.usualDoctor &&
          state.errors.usualDoctor.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="clinicName"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Clinic Name"
          type="text"
        />
        {state?.errors?.clinicName &&
          state.errors.clinicName.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <Divider> More Details</Divider>

        <TextField
          name="address"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Address"
          type="text"
        />
        {state?.errors?.address &&
          state.errors.address.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="phoneNumber"
          size="small"
          className="mt-2"
          variant="outlined"
          label="Phone Number"
          type="text"
        />
        {state?.errors?.phoneNumber &&
          state.errors.phoneNumber.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="referalDetails"
          size="small"
          className="mt-2"
          variant="outlined"
          placeholder="Reasons for referal"
          label="Referal Details"
          minRows={5}
          type="text"
        />
        {state?.errors?.referalDetails &&
          state.errors.referalDetails.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <TextField
          name="referalDetails"
          size="small"
          className="mt-2"
          variant="outlined"
          placeholder="Reasons for referal"
          label="Referal Details"
          minRows={5}
          type="text"
        />
        {state?.errors?.referalDetails &&
          state.errors.referalDetails.map((error) => (
            <p className="mt-1 text-sm text-red-500"> {error}</p>
          ))}

        <div className="text-left">
          <label
            htmlFor="centerType"
            className="block mb-2 mt-2 text-sm font-medium "
          >
            Request  Access to full health Record
          </label>
          <select
            id="requestAccess"
            name="requestAccess"
            className="bg-indigo-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
            defaultValue={"NO"}
          >
            <option value="NO">
            No
            </option>
            <option value="YES">YES</option>
          
          </select>
        </div>

        <SubmitButton label={"Create"} size={17} />
      </div>
    </form>
  );
}
