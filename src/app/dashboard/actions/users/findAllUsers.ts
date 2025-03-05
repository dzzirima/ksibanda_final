import dbConnect from "@/app/lib/dbConnect";
import User from "@/app/model/Users";

export default async function findAllUsers(){

    try {
        await dbConnect();
        const users = await User.find({})

        let filteredUsers = users.map((user) => {
            return {
          
              
              email: user.email,
              firstName:user.firstName,
              lastName:user.lastName,
              role:user.role,
              walletAddress:user.walletAddress

             
            };
          });
      
        return filteredUsers


    } catch (error) {
        console.log(error)

        return []
    
    }
}