// import AdminTopNav from "@/ui/admin/AdminTopNavigation";
import findAllUsers from "@/app/dashboard/actions/users/findAllUsers";
import CreateUser from "@/app/dashboard/users/create/page";
import ListOfUsers from "../ui/admin/ListOfUsers";


export default  async function AdminPage() {
   let users = await findAllUsers();
    console.log(users);
  return (
    <div className="flex flex-col">
      <CreateUser/>
      <ListOfUsers users={users}/>
    </div>
  )
}