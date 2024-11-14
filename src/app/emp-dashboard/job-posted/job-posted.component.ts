import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmpDashboardComponent } from '../emp-dashboard.component';
import { ApprovedJobsComponent } from './approved-jobs/approved-jobs.component';

@Component({
  selector: 'app-job-posted',
  standalone: true,
  imports: [CommonModule,EmpDashboardComponent,ApprovedJobsComponent],
  templateUrl: './job-posted.component.html',
  styleUrl: './job-posted.component.css'
})
export class JobPostedComponent {

}
