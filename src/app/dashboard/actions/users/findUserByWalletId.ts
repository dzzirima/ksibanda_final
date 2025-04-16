"use server";

import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/Users";

export default async function findUserByWalletId(userWalletId: string) {
  try {
    await dbConnect();

    // Find the user by wallet address
    const user = await User.findOne({ "walletAddress": userWalletId });

    let userDetails = {
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      role: user?.role,
      walletAddress: user?.walletAddress,
      phoneNumber: user?.phoneNumber,
      address: user?.address,
    };

    return userDetails;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
