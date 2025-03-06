import TopAnalysis from "@/app/dashboard/ui/doctor/TopAnalysis";
import PatientTable from "@/app/dashboard/ui/doctor/PatientTable";
import findPatientDetails from "../actions/users/findPatientsDetails";

export default  async function DoctorDashboard() { 
  let patientDetails = await findPatientDetails()
  // console.log(patientDetails)
  return (
    <div className="flex  flex-col">
        <div className="top-container">

            <TopAnalysis/>
        </div>
        {/* <div className="">
           <PatientTable
        </div> */}

        <div className="">
            <PatientTable patientDetails={patientDetails} />
        </div>

     
    </div>
  );
}
