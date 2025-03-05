"use client"

import Link from "next/link";

export default function DoctorTopNav(){

    return (
        <div className="flex justify-evenly">
            <Link href="/dashboard/referral/create">  New Referal</Link>
            <Link href="/dashboard/medication/create">  New  Medication</Link>
        </div>
    )
}