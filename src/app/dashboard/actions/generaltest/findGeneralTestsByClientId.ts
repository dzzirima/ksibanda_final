"use server";


import dbConnect from "@/app/lib/dbConnect";
import GeneralTest from "@/app/model/GeneralTests";


export default async function findGeneralTestsByPatientId(patient: string) {


  console.log("getting genereal tests " + patient);


    try {   

    await dbConnect();
    const referal = await GeneralTest.find({ testFor: patient }).sort({ createdAt: -1 });

    return referal.map((ref) => ({
      testFor: ref.testFor,
      contraceptionMethod: ref.contraceptionMethod,
      stoppedOn: ref.stoppedOn,
      assistedConception: ref.assistedConception,
      conceptionMethod: ref.conceptionMethod,
      menstrualCycle: ref.menstrualCycle,
      lastPeriod: ref.lastPeriod,
      agreedDueDate: ref.agreedDueDate,
      gynaecologicalHistory: ref.gynaecologicalHistory,
      medicalSurgicalHistory: ref.medicalSurgicalHistory,
      nutritionSupplements: ref.nutritionSupplements,
      allergies: ref.allergies,
      medications: ref.medications,
      id: ref._id.toString(),
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