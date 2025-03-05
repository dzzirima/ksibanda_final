
import mongoose, { Document, Schema } from "mongoose";

export interface IMedication extends Document {
    patientWalletAddress:String,
    nextVisit:String,
    topic:String
    

}

const medicationSchema: Schema = new mongoose.Schema({
    patientWalletAddress: {
        type: String,
        required: true
    },
    nextVisit: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }

   
}, { timestamps: true });

const Medication = mongoose.models.Medication || mongoose.model<IMedication>('Medication', medicationSchema )

export default Medication;
