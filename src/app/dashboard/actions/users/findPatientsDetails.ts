import dbConnect from "@/app/lib/dbConnect";
import Medication from "@/app/model/Medication";
import User from "@/app/model/Users";

export default async function findPatientDetails() {
  try {
    await dbConnect();
    const users = await User.find({});

    let result = [];

    for (let i = 0; i < users.length; i++) {
      let currentUser = users[i];
      let address = currentUser["walletAddress"];

      // get the mediaction infor
      const latestMedication = await Medication.findOne({
        patientWalletAddress: address,
      }).sort({ createdAt: -1 }); // Sort by createdAt descending

      let res = {};

      if (!latestMedication) {
        res = {
          email: currentUser.email,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          role: currentUser.role,
          walletAddress: currentUser.walletAddress,
          nextVisit: "",
          lastVist: "",
          topic: "",
        };

        console.log("No medication records found.");
      } else {
        let lasVist = latestMedication.createdAt;
        res = {
          email: currentUser.email,
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          role: currentUser.role,
          walletAddress: currentUser.walletAddress,
          nextVisit: latestMedication.nextVisit,
          lastVist: lasVist.toLocaleDateString(),
          topic: latestMedication.topic,
        };
      }
      result.push(res);
    }

    return result;
  } catch (error) {
    return [];
  }
}
