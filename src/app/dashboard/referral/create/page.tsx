import ReferralForm  from "@/app/dashboard/ui/referral/ReferralForm"
import { Card } from "@mui/material"
import findAllUsers from "@/app/dashboard/actions/users/findAllUsers"

export default async function createReferal(){

    const users = await findAllUsers()

    // console.log(users)

    return (
        <div className="">

            <Card elevation={1} className="m-4">
            <ReferralForm users={users}/>
            </Card>

        </div>
    )
}
