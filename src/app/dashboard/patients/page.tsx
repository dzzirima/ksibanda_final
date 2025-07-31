"use client";

import { useEffect, useState } from "react";
import findUserByWalletId from "../actions/users/findUserByWalletId";
import Breadcrumbs from "../ui/utils/BreadCumps";
import { Card, Divider } from "@mui/material";
import PersonalDetails from "../ui/utils/PersonalDetail";
import UserStatistics from "../ui/Users/statistics";
import AccessrequestTable from "../ui/utils/AccessRequestTable";
import findRequestByWalletid from "../actions/AccessRequest/find_request_access_by_wallet";
import { mintNFT } from "./interact";

export default function Page() {
  const [patientDetails, setPatientDetails] = useState<any>(null);
  const [requestDetails, setRequestDetails] = useState<any>([]);

  

  useEffect(() => {
    const getLoginUser = async () => {
      try {
        //@ts-ignore
        let foundPatientDetails = await findUserByWalletId(
          
          window.ethereum.selectedAddress
        );

        //@ts-ignore
        console.log(window.ethereum.selectedAddress);

        setPatientDetails(foundPatientDetails);

        //@ts-ignore
        console.log("helloe " + window.ethereum.selectedAddress);
        //@ts-ignore
        let foundRequests = await findRequestByWalletid(
          window.ethereum.selectedAddress
        );

        console.log("sdsdtsdgstdsfdtsd ");
        console.log(foundRequests);
        setRequestDetails(foundRequests);
      } catch (error) {
        console.log("error", error);
      }
    };

    getLoginUser();
  }, []);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Home", href: "/dashboard/" },
          {
            label: "Patient Profile",
            href: `/dashboard/referral/create`,
            active: true,
          },
        ]}
      />

      <Card className="p-4" elevation={1}>
       

        {/* <div className="">  {JSON.stringify(patientDetails)}</div> */}
        <div className="flex flex-col md:flex-row">
          <div className="">
            <PersonalDetails
              name={patientDetails?.["firstName"]}
              title="First Name"
            />

            <PersonalDetails
              name={patientDetails?.["lastName"]}
              title="Last  Name"
            />
            <PersonalDetails name={patientDetails?.["email"]} title="email" />

            <PersonalDetails
              name={patientDetails?.["phoneNumber"]}
              title="Phone Number"
            />
            <PersonalDetails
              title="Address"
              name={patientDetails?.["address"]}
            />

            <PersonalDetails
              title="Expected Delivery Date"
              name="29 June 2020"
            />
            <PersonalDetails title="Next Appoinment" name="29 June 2020" />
            <PersonalDetails title="Last Appoinment" name="29 June 2020" />

            <PersonalDetails title="Marital Status" name="Single" />
          </div>

          <div className="">{/* <UserStatistics /> */}</div>
        </div>
      </Card>

      {/* <Form invoice={invoice} customers={customers} /> */}
      <div className=" m-3"> </div>
      <Divider> Access Requests</Divider>
      <Card>
        <AccessrequestTable data={requestDetails} />
      </Card>
    </main>
  );
}
