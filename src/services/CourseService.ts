import { Course, ICourse } from "../models/Course";
import { courseValidator } from "../validators/courseValidator";

export class CourseService {
  async getAllCourses(): Promise<ICourse[]> {
    return Course.find();
  }

  async getCourseById(id: string): Promise<ICourse | null> {
    return Course.findById(id);
  }

  async createCourse(newCourseData: any): Promise<ICourse> {
    const { error } = this.validateCourse(newCourseData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const newCourse = new Course({
      ...newCourseData,
    });
    return await newCourse.save();
  }

  async updateCourse(
    id: string,
    updatedCourseData: any,
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

  private validateCourse(courseData: any) {
    return courseValidator.validate(courseData);
  }
}
