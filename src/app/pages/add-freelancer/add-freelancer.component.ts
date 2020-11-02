import { Component, OnInit } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.css']
})

export class AddFreelancerComponent implements OnInit {
  freelancer = {
    username: '',
    email: '',
    phoneNo: '',
    skills: [],
    hobbies: []
  };
  selectedSkill = [];
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
    private router: Router, 
    private notification: NzNotificationService
    ) { }

  ngOnInit(): void {
    this.retrieveSkillsSelection();
    this.retrieveHobbiessSelection();
  }

  saveFreelancer(): void {
    this.disableInput = true;
    // console.log(this.freelancer.skills);
    console.log('selectedSkill', this.selectedSkill);

    const data = {
      username: this.freelancer.username,
      email: this.freelancer.email,
      phoneNo: this.freelancer.phoneNo,
      skills: this.selectedSkill,
      hobbies: this.freelancer.hobbies
    };

    this.freelancerService.createFreelancer(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/freelancer']);
        },
        error => {
          console.log(error);
          // console.log(errorMessage);
          const errorMessage = `- ` + error.error.message.join('<br> - ');
          this.createNotification('error', 'Error', errorMessage);
        }).add(() => {
          this.disableInput = false;
        });
  }

  retrieveSkillsSelection(): void {
    this.skillLoading = true;
    this.freelancerService.getAllSkill()
      .subscribe(
        data => {
          const children: Array<{ label: string; value: string }> = [];
          for (const skill of data) {
            children.push({ label: skill, value: skill });
          }
          this.skillOptions = children;
        },
        error => {
          console.log(error);
        }).add(() => {
          this.skillLoading = false;
        });
  }

  retrieveHobbiessSelection(): void {
    this.hobbyLoading = true;
    this.freelancerService.getAllHobby()
      .subscribe(
        data => {
          const children: Array<{ label: string; value: string }> = [];
          for (const skill of data) {
            children.push({ label: skill, value: skill });
          }
          this.hobbyOptions = children;
        },
        error => {
          console.log(error);
        }).add(() => {
          this.hobbyLoading = false;
        });
  }
}
