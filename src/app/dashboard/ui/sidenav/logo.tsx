import { GlobeAltIcon } from '@heroicons/react/24/outline';


export default function CompanyLogo() {
  return (
    <div
      className={` flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-10 w-10 rotate-[15deg]" />
      <p className="text-[20px] ">MATTER EHR</p>
    </div>
  );
}