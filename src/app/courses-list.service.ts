import { Injectable } from '@angular/core';
import { Curso } from './course-action/curso';
import { COURSES } from './data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesListService {
  constructor() {}
  getCourses(): Curso[] {
    return COURSES;
  }
}
