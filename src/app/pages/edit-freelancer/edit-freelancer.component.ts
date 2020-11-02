import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-edit-freelancer',
  templateUrl: './edit-freelancer.component.html',
  styleUrls: ['./edit-freelancer.component.css']
})

export class EditFreelancerComponent implements OnInit {
  freelancer = {
    _id: '',
    username: '',
    email: '',
    phoneNo: '',
    skills: [],
    hobbies: [],
    version: 0
  };
  
  skillOptions: Array<{ label: string; value: string }> = [];
  hobbyOptions: Array<{ label: string; value: string }> = [];
  skillLoading = false;
  hobbyLoading = false;
  disableInput = false;

  createNotification(type: string, errorTitle: string, message: string): void {
    this.notification.create(
      type,
      errorTitle,
      message
    );
  }

  constructor(
    private freelancerService: FreelancerService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: NzNotificationService
    ) { }

  ngOnInit(): void {
    this.getFreelancerById(this.route.snapshot.paramMap.get('id'));
  }

  getFreelancerById(id): void {
    this.disableInput = true;
    this.freelancerService.getFreelancerById(id)
      .subscribe(
        data => {
          this.freelancer._id = data._id;
          this.freelancer.username = data.username;
          this.freelancer.email = data.email;
          this.freelancer.phoneNo = data.phoneNo;
          this.freelancer.skills = data.skills;
          this.freelancer.hobbies = data.hobbies;
          this.freelancer.version = data.version;

          console.log(this.freelancer);
          this.disableInput = false;
        },
        error => {
          console.log(error);
        });
  }

  saveFreelancer(): void {
    this.disableInput = true;

    let updatePayload = { ...this.freelancer };
    delete updatePayload._id;
    delete updatePayload.email;

    this.freelancerService.updateFreelancer(this.freelancer._id, updatePayload)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/freelancer']);
        },
        error => {
          console.log(error);
          const errorMessage = `- ` + error.error.message.join('<br> - ');
          this.createNotification('error', 'Error', errorMessage);
        }).add(() => {
          this.disableInput = false;
        });
  }
}
