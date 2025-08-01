// import AdminTopNav from "@/ui/admin/AdminTopNavigation";
import AdminTopNav from "@/app/dashboard/ui/admin/AdminTopNavigation";
import ListOfUsers from "@/app/dashboard/ui/admin/ListOfUsers";
import CreateUser from "@/app/dashboard/users/create/page";

export default function AdminPage() {
  return (
    <div className="flex flex-col">
      <CreateUser/>

      <ListOfUsers users={[]}/>
    </div>
  )
}