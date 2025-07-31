"use client";

import requestAccess from "@/app/dashboard/actions/AccessRequest/request_access";
import findReferralsByPatientId from "@/app/dashboard/actions/referals/findReferalsByClientId";
import { checkIfUserHasAccessToRecords } from "@/app/dashboard/patients/interact";

import { useRouter } from "next/navigation";

// import { checkIfHasAccess } from "@/app/dashboard/patients/test_scripts/test_new";
import { useEffect, useState } from "react";

export default function Page(props: { params: Promise<{ id: string }> }) {
  const params = props.params;

  //@ts-ignore
  const patientId = params["id"];

  const [canAccess, setCanAccess] = useState(false);

  const router = useRouter();

  // Check if the user has access to the patient's data
  const checkIfHasAccess = async () => {
    try {
      const userHasAccess = await checkIfUserHasAccessToRecords(patientId);

      console.log("User has access:", userHasAccess);

      if (
        userHasAccess.accessRes == true ||
        userHasAccess.accessRes == "true"
      ) {
        setCanAccess(true);
      } else {
        setCanAccess(false);
      }
    } catch (error) {
      console.error("Error checking if user has minted:", error);
      setCanAccess(false);
    }
  };

  //handle requesting access
  const handleRequestAccess = async () => {
    // @ts-ignore
    let currentaddress = window.ethereum.selectedAddress;

    try {
      let responce = await requestAccess(currentaddress, patientId, "active");
      console.log("Access request response:", responce);
    } catch (error) {
      console.error("Error requesting access:", error);
    }
  };

  useEffect(() => {
    async function checkIfcanAccess() {
      let canAccess = await checkIfHasAccess();

      console.log("Can access from site:", canAccess);
      //@ts-ignore
      // setCanAccess(canAccess);

      console.log("checking user  referral details for patient:", patientId);
      // getting  patient details
      let patientDetails = await findReferralsByPatientId(patientId);
      console.log("Patient details:", patientDetails);
    }

    checkIfcanAccess();
  }, [patientId]);

  // Example: navigate to referral page on button click
  const goToReferral = () => {
    router.push("/dashboard/referral/create");
  };

  return (
    <>
      {/* <Test /> */}

      <div className="">
        {/* {JSON.stringify(patientId)}
        {JSON.stringify(canAccess)} */}
      </div>
      {canAccess ? (
        <div className=" ">
          <div className="flex flex-row justify-between ">
            <div className="border-2 border-green-500 bg-green-50 text-green-700 rounded-xl px-6 py-4 font-semibold shadow-sm flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              You have Full access to this user.
            </div>
            <div className="text-gray-500 font-mono">
              {patientId
                ? `${patientId.slice(0, 6)}...${patientId.slice(-3)}`
                : ""}
            </div>
          </div>

          <div className="bottomPart mt-5">
            <div className="flex flex-row">
              <div className="text-green-500">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={goToReferral}
                >
                  New Refferal
                </button>
              </div>
            </div>

            <div className="mt-5">
              {/* <PatientReferralTableContainer patientId={patientId}/> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <button
                onClick={handleRequestAccess}
                className="text-xl font-semibold text-red-600"
              >
                You don't have access to this data Ask from Patient.
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
