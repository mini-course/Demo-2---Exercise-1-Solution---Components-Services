import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "Courses Component";
  courses;

  constructor(private _courseService: CourseService) {
    this.courses = _courseService.getCourses();
  }

  ngOnInit() {
  }

}
