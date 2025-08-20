"use client";

import requestAccess from "@/app/dashboard/actions/AccessRequest/request_access";
import findReferralsByPatientId from "@/app/dashboard/actions/referals/findReferalsByClientId";
import { checkIfUserHasAccessToRecords } from "@/app/dashboard/patients/interact";
import PatientReferralTable from "@/app/dashboard/ui/referral/ReferralTable";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkIfUserHasAccessToRecordsFromDb } from "@/app/dashboard/actions/auth/userhasAccess";
import { getCurrentLoginUser } from "@/app/dashboard/actions/auth/getCurrentLoginUser";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import GeneralTestsTable from "@/app/dashboard/ui/general_tests/GeneralTestsTable";
import findGeneralTestsByPatientId from "@/app/dashboard/actions/generaltest/findGeneralTestsByClientId";
// import { Placeholder, Tabs } from "rsuite";
// import "rsuite/dist/rsuite.min.css";

// import { checkIfHasAccess } from "@/app/dashboard/patients/test_scripts/test_new";

// Custom TabPanel component for MUI Tabs
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//end of custom TabPanel component

export default function Page(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params); // Unwrap the params Promise

  const patientId = params.id;

  const [canAccess, setCanAccess] = useState(false);
  const [patientReferals, setSetPatientReferals] = useState([]);

  const [currentlyLoginUser, setCurrentLoginUser] = useState(null);
  const [generalTests, setGeneralTests] = useState([]);

  const router = useRouter();

  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Check if the user has access to the patient's data
  const checkIfHasAccess = async () => {
    console.log(
      "Checking if user has access to records for patient:",
      patientId
    );
    try {
      // const userHasAccess = await checkIfUserHasAccessToRecords(patientId);

      //@ts-ignore
      const userHasAccess = await checkIfUserHasAccessToRecordsFromDb(
        currentlyLoginUser?.id,
        patientId
      );

      console.log("User has access:", userHasAccess);

      if (userHasAccess.accessRes == true) {
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
    let currentaddress = currentlyLoginUser.id;

    try {
      let responce = await requestAccess(currentaddress, patientId, "active");
      console.log("Access request response:", responce);
    } catch (error) {
      console.error("Error requesting access:", error);
    }
  };

  useEffect(() => {
    async function checkIfcanAccess() {
      if (currentlyLoginUser == null) {
        let currentloged = await getCurrentLoginUser();

        setCurrentLoginUser(currentloged);
      } else {
        let canAccess = await checkIfHasAccess();

        //@ts-ignore
        // setCanAccess(canAccess);

        // getting  patient details
        let patientDetails = await findReferralsByPatientId(patientId);

        let generalTests = await findGeneralTestsByPatientId(patientId);

        //@ts-ignore
        setSetPatientReferals(patientDetails);

        //@ts-ignore
        setGeneralTests(generalTests);
      }
    }

    checkIfcanAccess();
  }, [currentlyLoginUser]);

  // Example: navigate to referral page on button click
  const goToReferral = () => {
    router.push("/dashboard/referral/create");
  };

  return (
    <>
      {/* <Test /> */}

      <div className="">
        {/* {JSON.stringify(currentlyLoginUser)} */}
        {/* {JSON.stringify(canAccess)} */}
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
              {/* {patientId
                ? `${patientId.slice(0, 6)}...${patientId.slice(-3)}`
                : ""} */}

              {patientId
                ? //@ts-ignore
                  `${currentlyLoginUser.firstName}`
                : ""}
            </div>
          </div>


          <div className="bottomPart mt-5">
            <div className="flex flex-row">
              {/* <div className="text-green-500 hidden md:block">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={goToReferral}
                >
                  New Refferal
                </button>
              </div> */}
            </div>

            {/* working with tabs */}

            {/* <Tabs defaultActiveKey="1">
              <Tabs.Tab eventKey="1" title="My Referrals">
                <div className="mt-5 mb-5">
                  <PatientReferralTable data={patientReferals} />
                </div>
              </Tabs.Tab>
              <Tabs.Tab eventKey="2" title="General Tests">
                <div className="mt-5">
                  <GeneralTestsTable data={generalTests} />
                </div>
              </Tabs.Tab>
              <Tabs.Tab eventKey="3" title="General Tests Results">
                <GeneralTestsTable data={generalTests} />
              </Tabs.Tab>
            </Tabs> */}



            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  
                  aria-label="basic tabs example"
                >
                  <Tab label="My Referrals" {...a11yProps(0)} />
                  <Tab label="General Tests" {...a11yProps(1)} />
                  <Tab label="General Tests Results" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel  value={(value)} index={0}>
                <div className="mt-5">
                  <GeneralTestsTable data={generalTests} />
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={(value)} index={1}>
                 <GeneralTestsTable data={generalTests} />
              </CustomTabPanel>
              <CustomTabPanel value={(value)} index={2}>
                 <GeneralTestsTable data={generalTests} />
              </CustomTabPanel>
            </Box>
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
