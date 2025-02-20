import findReferralsByPatientId from "@/app/dashboard/actions/referals/findReferalsByClientId";
import findProfileByPatientId from "@/app/dashboard/actions/users/findProfileByPatientId";
import UserStatistics from "@/app/dashboard/ui/Users/statistics";
import Breadcrumbs from "@/app/dashboard/ui/utils/BreadCumps";
import PersonalDetails from "@/app/dashboard/ui/utils/PersonalDetail";
import Referral from "@/app/dashboard/ui/utils/Referral";
import { Card, Divider, Typography } from "@mui/material";
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from "next/navigation";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const patientId = params.id;
  const [profile, refarreals] = await Promise.all([
    findProfileByPatientId(10),
    findReferralsByPatientId(1),
  ]);

  if (!profile) {
    notFound();
  }
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
        <Referral />
      </Card>
    </main>
  );
}
