import ReferralForm  from "@/app/dashboard/ui/referral/ReferralForm"
import { Card } from "@mui/material"

export default function CreateUser(){

    return (
        <div className="">

            <Card elevation={1} className="m-4">
            <ReferralForm/>
            </Card>

        </div>
    )
}
