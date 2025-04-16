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
      console.log("zikali");
      let canAccess = await checkIfHasAccess();
      console.log("hello" + canAccess);
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
        <div className="">you dont have access</div>
      )}
    </>
  );
}
