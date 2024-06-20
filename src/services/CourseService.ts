import { Course, ICourse } from "../models/Course";
import { courseValidator } from "../validators/courseValidator";

export class CourseService {
  async getAllCourses(): Promise<ICourse[]> {
    return Course.find();
  }

  async getCourseById(id: string): Promise<ICourse | null> {
    return Course.findById(id);
  }

  async createCourse(newCourseData: ICourse): Promise<ICourse | null> {
    const { error } = courseValidator.validate(newCourseData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const newCourse = new Course({
      ...newCourseData,
    });

    try {
      return await newCourse.save();
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
      throw err;
    }
  }

  async updateCourse(
    id: string,
    updatedCourseData: ICourse,
  ): Promise<ICourse | null> {
    const { error } = this.validateCourse(updatedCourseData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    return Course.findByIdAndUpdate(id, updatedCourseData, { new: true });
  }

  async deleteCourse(id: string): Promise<ICourse | null> {
    return Course.findByIdAndDelete(id);
  }

  private validateCourse(courseData: ICourse) {
    return courseValidator.validate(courseData);
  }
}
