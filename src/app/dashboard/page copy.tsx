import TopAnalyis from "@/app/dashboard/ui/dashboard/TopAnalysis";
import BottomAnalysis from "@/app/dashboard/ui/dashboard/BottomAnalysis";

export default function HomePage() {
  return (
    <div className="flex flex-col p-3">
      <div className=""> 
        <TopAnalyis/>
      </div>
      <div className="">
        <BottomAnalysis />
      </div>
    </div>
  );
}

