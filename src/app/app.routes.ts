import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployerComponent } from './employer/employer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HiringSolutionComponent } from './hiring-solution/hiring-solution.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { JobPostedComponent } from './emp-dashboard/job-posted/job-posted.component';
import { ApprovedJobsComponent } from './emp-dashboard/job-posted/approved-jobs/approved-jobs.component';
import { RejectedJobsComponent } from './emp-dashboard/job-posted/rejected-jobs/rejected-jobs.component';
import { SignupEmployerComponent } from './signup-employer/signup-employer.component';



export const routes: Routes = [
  { path: '', component: ContentboxComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'login-page', component: LoginPageComponent }, 
  { path: 'hiring-solution', component: HiringSolutionComponent },// Login page
  { path: 'dashboard', component: EmpDashboardComponent },
  { path: 'post-job', component: EmpDashboardComponent },
  { path: 'job-posted', component: JobPostedComponent },
  { path: 'approved-jobs', component: ApprovedJobsComponent },
  { path: 'rejected-jobs', component: RejectedJobsComponent },
  { path: 'signup-page', component: SignupEmployerComponent }, 

  // { path: 'create-job-post', component: CreateJobPostComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Wildcard for 404 redirects
];
