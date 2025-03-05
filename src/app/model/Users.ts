
import mongoose, { Document, Schema } from "mongoose";
export interface IUsers extends Document {
    firstName: string;
    lastName: number;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    role: string;

}

const userSchema: Schema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true  
    },
    role: { 
        type: String,
        required: true
    },
    walletAddress :{
        type: String,
     
    },
});

const User = mongoose.models.User || mongoose.model<IUsers>('User', userSchema)

export default User;
