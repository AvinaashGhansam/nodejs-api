import { Course } from "../models/Course";
import { courseValidator } from "../validators/courseValidator";

export class CourseService {
  private readonly courses: Course[] = [
    { id: 1, name: "Course 1" },
    { id: 2, name: "Course 2" },
    { id: 3, name: "Course 3" },
  ];

  getAllCourses(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }

  getCourseById(id: number): Promise<Course | undefined> {
    const course = this.courses.find((c) => c.id === id);
    return Promise.resolve(course);
  }

  createCourse(newCourseData: any): Promise<Course> {
    const { error } = this.validateCourse(newCourseData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const newCourse: Course = {
      id: this.courses.length + 1,
      name: newCourseData.name,
    };
    this.courses.push(newCourse);
    return Promise.resolve(newCourse);
  }

  updateCourse(
    id: number,
    updatedCourseData: any,
  ): Promise<Course | undefined> {
    const { error } = this.validateCourse(updatedCourseData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) {
      return Promise.resolve(undefined);
    }

    this.courses[index].name = updatedCourseData.name;
    return Promise.resolve(this.courses[index]);
  }

  deleteCourse(id: number): Promise<Course | undefined> {
    const index = this.courses.findIndex((c) => c.id === id);
    if (index === -1) {
      return Promise.resolve(undefined);
    }

    const deletedCourse = this.courses.splice(index, 1)[0];
    return Promise.resolve(deletedCourse);
  }

  private validateCourse(courseData: any) {
    return courseValidator.validate(courseData);
  }
}
