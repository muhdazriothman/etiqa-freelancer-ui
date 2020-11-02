import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-list',
  templateUrl: './freelancer-list.component.html',
  styleUrls: ['./freelancer-list.component.css']
})
export class FreelancerListComponent implements OnInit {
  loading = false;
  freelancers = [];

  constructor(private freelancerService: FreelancerService, private router: Router) { }

  ngOnInit(): void {
    this.retrieveFreelancer();
  }

  retrieveFreelancer(): void {
    this.loading = true;
    this.freelancerService.getAllFreelancer()
      .subscribe(
        data => {
          this.freelancers = data && data.length > 0 ? data : [];
        },
        error => {
          console.log(error);
        }).add(() => {
          this.loading = false;
        });
  }

  deleteFreelancer(freelancerId): void {
    console.log(freelancerId);
    this.loading = true;
    this.freelancerService.deleteFreelancer(freelancerId)
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }).add(() => {
        this.retrieveFreelancer();
      });
  }

  editFreelancer(freelancerId): void {
    this.router.navigate(['/freelancer/edit', freelancerId]);
  }
}
