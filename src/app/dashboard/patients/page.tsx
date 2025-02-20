import { Card, Divider } from "@mui/material";
import Breadcrumbs from "../ui/utils/BreadCumps";
import PersonalDetails from "../ui/utils/PersonalDetail";
import UserStatistics from "../ui/Users/statistics";
import PatientReferralTable from "@/app/dashboard/ui/Users/PatientReferralTable"
export default function Page() {
  return (
    <div className="">
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
          <div className="flex flex-col md:flex-row">
            <div className="">
              <PersonalDetails name="Jane" title="Name" />
              <PersonalDetails name="test@gmail.com" title="email" />
              <PersonalDetails title="Last Name" name="Zirima" />
              <PersonalDetails title="Phone Number" name="0785395827" />
              <PersonalDetails
                title="Address"
                name="39 Vanpraah Milton Park , Harare"
              />

              <PersonalDetails
                title="Expected Delivery Date"
                name="29 June 2020"
              />
              <PersonalDetails title="Next Appoinment" name="29 June 2020" />
              <PersonalDetails title="Last Appoinment" name="29 June 2020" />

              <PersonalDetails title="Marital Status" name="Single" />
            </div>

            <div className="">
              <UserStatistics />
            </div>
          </div>
        </Card>

        {/* <Form invoice={invoice} customers={customers} /> */}
        <div className=" m-3"> </div>
        <Divider> Reffarals</Divider>

        <Card>
          <PatientReferralTable/>
        </Card>
      </main>
    </div>
  );
}
