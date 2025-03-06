
import mongoose, { Document, Schema } from "mongoose";
export interface IAccessRequest extends Document {
    requestorWalletId: string;
    patientWalletId:string;
    status:string;
}

const accessRequestSchema: Schema = new mongoose.Schema({
    requestorWalletId: {
        type: String,
        required: true
    },
    patientWalletId: {
        type: String,
        required: true
    },
    status: {
        type: String
    }

});

const AccessRequest = mongoose.models.AccessRequest || mongoose.model<IAccessRequest>('AccessRequest', accessRequestSchema)

export default AccessRequest;
