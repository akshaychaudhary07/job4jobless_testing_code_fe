import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JobPostedComponent } from '../job-posted.component';

@Component({
  selector: 'app-rejected-jobs',
  standalone: true,
  imports: [CommonModule,JobPostedComponent],
  templateUrl: './rejected-jobs.component.html',
  styleUrl: './rejected-jobs.component.css'
})
export class RejectedJobsComponent {

}
