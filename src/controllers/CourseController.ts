import { Request, Response } from "express";
import { CourseService } from "../services/CourseService";

const courseService = new CourseService();

class CourseController {
  async getAllCourses(req: Request, res: Response) {
    try {
      const courses = await courseService.getAllCourses();
      res.send(courses);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCourseById(req: Request, res: Response) {
    const courseId = req.params.id;
    try {
      const course = await courseService.getCourseById(courseId);
      if (!course) {
        return res.status(404).send("Course not found");
      }
      res.send(course);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }

  async createCourse(req: Request, res: Response) {
    try {
      const newCourse = await courseService.createCourse(req.body);
      res.send(newCourse);
    } catch (err: any) {
      res.status(400).json({ error: err.message }); // Assuming validation error
    }
  }

  async updateCourse(req: Request, res: Response) {
    const courseId = req.params.id;
    try {
      const updatedCourse = await courseService.updateCourse(
        courseId,
        req.body,
      );
      if (!updatedCourse) {
        return res.status(404).send("Course not found");
      }
      res.send(updatedCourse);
    } catch (err: any) {
      res.status(400).json({ error: err.message }); // Assuming validation error
    }
  }

  async deleteCourse(req: Request, res: Response) {
    const courseId = req.params.id;
    try {
      const deletedCourse = await courseService.deleteCourse(courseId);
      if (!deletedCourse) {
        return res.status(404).send("Course not found");
      }
      res.send(deletedCourse);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default new CourseController();
