"use server";


import dbConnect from "@/app/lib/dbConnect";
import Referal from "@/app/model/Refferal";

export default async function findReferralsByPatientId(patient: string) {


    try {   

    await dbConnect();
    const referal = await Referal.find({ referalTo: patient }).sort({ createdAt: -1 });

    return referal.map((ref) => ({
      id: ref._id.toString(),
      referalTo: ref.referalTo,
      hospital: ref.hospital,
      specialist: ref.specialist,
      referrerName: ref.referrerName,
      usualDoctor: ref.usualDoctor,
      address: ref.address,
      phoneNumber: ref.phoneNumber,
      referalDetails: ref.referalDetails,
      requestAccess: ref.requestAccess,
      clinicName: ref.clinicName,
      createdAt: ref.createdAt.toString(),
    }));


    
    } catch (error) {
        console.error("Error fetching referrals:", error);
        return [];
    }


    
    
}