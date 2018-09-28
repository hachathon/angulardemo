import { Component, OnInit } from '@angular/core';
import { CourseService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  courses = [];
  constructor(private service: CourseService) { }

  ngOnInit() {
    this.service.getAllCourses().subscribe(response => {
      console.log('data from db -->' + response);
      this.courses = response;
    }, error => {
      console.log("Error occured while calling db..")
    })
  }
}
