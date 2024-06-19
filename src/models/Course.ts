import { Document, Schema } from "mongoose";
import * as mongoose from "mongoose";

export interface ICourse extends Document {
  name: string;
  author: string;
  tags: [string];
  data: Date;
  isPublished: boolean;
}

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  tags: [String],
  date: { type: Date, default: Date.now, required: true },
});

export const Course = mongoose.model<ICourse>("Course", CourseSchema);
