import mongoose, { Document, Schema } from "mongoose";

export interface IGeneralTest extends Document {
  testFor: string;
  contraceptionMethod: string;
  stoppedOn: string;
  assistedConception: string;
  conceptionMethod: string;
  menstrualCycle: string;
  lastPeriod: string;
  agreedDueDate: string;
  gynaecologicalHistory: string;
  medicalSurgicalHistory: string;
  nutritionSupplements: string;
  allergies: string;
  medications: string;
}

const generalTestSchema: Schema = new mongoose.Schema(
  {
    testFor: { type: String, required: true },
    contraceptionMethod: { type: String },
    stoppedOn: { type: String },
    assistedConception: { type: String },
    conceptionMethod: { type: String},
    menstrualCycle: { type: String },
    lastPeriod: { type: String },
    agreedDueDate: { type: String },
    gynaecologicalHistory: { type: String },
    medicalSurgicalHistory: { type: String },
    nutritionSupplements: { type: String },
    allergies: { type: String},
    medications: { type: String },
  },
  { timestamps: true }
);

const GeneralTest =
  mongoose.models.GeneralTest ||
  mongoose.model<IGeneralTest>("GeneralTest", generalTestSchema);

export default GeneralTest;
