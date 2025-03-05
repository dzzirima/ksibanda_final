import MedicationForm  from "@/app/dashboard/ui/medication/MedicationForm"
import { Card } from "@mui/material"
import findAllUsers from "@/app/dashboard/actions/users/findAllUsers"

export default async function createMedication(){

    const users = await findAllUsers()

    // console.log(users)

    return (
        <div className="">

            <Card elevation={1} className="m-4">
            <MedicationForm users={users}/>
            </Card>

        </div>
    )
}
