import dbConnect from "@/app/lib/dbConnect";
import Medication from "@/app/model/Medication";
import User from "@/app/model/Users";


// add parameters to the function
export default async function editPatientDetails({
  
  patientId,
  pinataAddress,
  nftId,
  hasminted
}: {
  
  patientId: string;
  pinataAddress?: string;
  nftId?: string;
  hasminted?: boolean;

}) {
  try {
    await dbConnect();
    // Find the user by wallet address and update the NFT details
    const updatedUser = await User.findOneAndUpdate(
      { walletAddress: patientId },
      {
        pinataAddress: pinataAddress || null,
        nftId: nftId || null,
        hasminted: hasminted || false
      },
      { new: true } // Return the updated document
    );

   

    return updatedUser;
  } catch (error) {
    return [];
  }
}
