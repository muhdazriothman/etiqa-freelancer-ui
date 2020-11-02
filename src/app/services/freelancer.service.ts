import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://freelancer-svc.herokuapp.com/api/v1.0';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }

  getAllFreelancer(): Observable<any> {
    return this.http.get(`${baseUrl}/freelancer`);
  }

  getFreelancerById(id): Observable<any> {
    return this.http.get(`${baseUrl}/freelancer/${id}`);
  }

  createFreelancer(data): Observable<any> {
    return this.http.post(`${baseUrl}/freelancer`, data);
  }

  updateFreelancer(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/freelancer/${id}`, data);
  }

  deleteFreelancer(id): Observable<any> {
    return this.http.delete(`${baseUrl}/freelancer/${id}`);
  }

  getAllSkill(): Observable<any> {
    return this.http.get(`${baseUrl}/skill`);
  }

  getAllHobby(): Observable<any> {
    return this.http.get(`${baseUrl}/hobby`);
  }
}
