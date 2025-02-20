import TopAnalysis from "@/app/dashboard/ui/doctor/TopAnalysis";
import PatientTable from "@/app/dashboard/ui/doctor/PatientTable";

export default function DoctorDashboard() { 
  return (
    <div className="flex  flex-col">
        <div className="top-container">

            <TopAnalysis/>
        </div>
        {/* <div className="">
           <PatientTable
        </div> */}

        <div className="">
            <PatientTable/>
        </div>

     
    </div>
  );
}
