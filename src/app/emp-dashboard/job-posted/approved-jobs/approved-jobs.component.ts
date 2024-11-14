import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmpDashboardComponent } from '../../emp-dashboard.component';
import { JobPostedComponent } from '../job-posted.component';

@Component({
  selector: 'app-approved-jobs',
  standalone: true,
  imports: [CommonModule,EmpDashboardComponent,JobPostedComponent],
  templateUrl: './approved-jobs.component.html',
  styleUrl: './approved-jobs.component.css'
})
export class ApprovedJobsComponent {

}
