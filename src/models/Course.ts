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
  name: { type: String, required: true, minlength: 1, maxLength: 255 },
  author: { type: String, required: true },
  tags: {
    type: Array<string>,
    validate: {
      validator: function (val: string[]): Promise<boolean> {
        return Promise.resolve(val && val.length > 0);
      },
      message: "A course should have at least one tag",
    },
  },
  date: { type: Date, default: Date.now, required: true },
});

export const Course = mongoose.model<ICourse>("Course", CourseSchema);
