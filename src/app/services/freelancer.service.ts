import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://gentle-escarpment-79870.herokuapp.com/api/v1.0';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }

  getAllFreelancer(): Observable<any> {
    return this.http.get(`${baseUrl}/user`);
  }

  getFreelancerById(id): Observable<any> {
    return this.http.get(`${baseUrl}/user/${id}`);
  }

  createFreelancer(data): Observable<any> {
    return this.http.post(`${baseUrl}/user`, data);
  }

  updateFreelancer(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/user/${id}`, data);
  }

  deleteFreelancer(id): Observable<any> {
    return this.http.delete(`${baseUrl}/user/${id}`);
  }

  getAllSkill(): Observable<any> {
    return this.http.get(`${baseUrl}/skill`);
  }

  getAllHobby(): Observable<any> {
    return this.http.get(`${baseUrl}/hobby`);
  }
}
