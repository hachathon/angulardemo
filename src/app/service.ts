import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CourseService {
    coureseApi = "/api/rest/courses";
    constructor(private httpReq: HttpClient) { }

    getAllCourses(): Observable<any> {
        let headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.httpReq.get<any>(this.coureseApi, headers);
    }
}