import mongoose, { Document, Schema } from "mongoose";
export interface IReferal extends Document {
    referalTo:String
    hospital:String,
    
    specialist:String
    referrerName:String
    usualDoctor:String
    address:String
    phoneNumber:String
    

    referalDetails:String
    requestAccess:String
    // address
    clinicName:String

}

const referalSchema: Schema = new mongoose.Schema({
    referalTo: {
        type: String,
        required: true
    },
    hospital: {
        type: String,
        required: true
    },
    specialist: {
        type: String,
        required: true
    },
    referrerName: {
        type: String,
        required: true
    },
    usualDoctor: {
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true  
    },
    phoneNumber: { 
        type: String,
        required: true
    },
    referalDetails :{
        type: String,
     
    },
    requestAccess :{
        type: String,
     
    },
    clinicName :{
        type: String,
     
    },
}, { timestamps: true });

const Referal = mongoose.models.Referal || mongoose.model<IReferal>('Referal', referalSchema)

export default Referal;
