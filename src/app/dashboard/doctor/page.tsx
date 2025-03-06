import TopAnalysis from "@/app/dashboard/ui/doctor/TopAnalysis";
import PatientTable from "@/app/dashboard/ui/doctor/PatientTable";
import DoctorTopNav from  "@/app/dashboard/ui/doctor/DoctorNav"
import findPatientDetails from "../actions/users/findPatientsDetails";

export default async function DoctorDashboard() { 

    let patientDetails = await findPatientDetails()

  return (
    <div className="flex  flex-col">
        <div className="top-container">

            <TopAnalysis/>
        </div>
        <DoctorTopNav/>

        <div className="">
            <PatientTable patientDetails={patientDetails}/>
        </div>

     
    </div>
  );
}
