"use client";

import Test from "@/app/dashboard/patients/Test";
import { checkIfHasAccess } from "@/app/dashboard/patients/test_scripts/test_new";
import { useEffect, useState } from "react";

export default function Page(props: { params: Promise<{ id: string }> }) {
  const params = props.params;

  //@ts-ignore
  const patientId = params["id"];

  const [canAccess, setCanAccess] = useState(true);

  useEffect(() => {
    async function checkIfcanAccess() {
      let canAccess = await checkIfHasAccess();
      //@ts-ignore
      setCanAccess(canAccess);
    }

    checkIfcanAccess();
  }, [patientId]);

  return (
    <>
      {/* <Test /> */}

      <div className="">
        {JSON.stringify(patientId)}
        {JSON.stringify(canAccess)}
      </div>
      {canAccess ? (
        <div className="">
          <div className=""> you have Access </div>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-xl font-semibold text-red-600">
                You don't have access to this data Ask from Patient.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
