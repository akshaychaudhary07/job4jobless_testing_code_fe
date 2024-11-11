import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployerComponent } from './employer/employer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HiringSolutionComponent } from './hiring-solution/hiring-solution.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { CreateJobPostComponent } from './emp-dashboard/create-job-post/create-job-post.component';

export const routes: Routes = [
  { path: '', component: ContentboxComponent }, // Home page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'employer', component: EmployerComponent },
  { path: 'login-page', component: LoginPageComponent }, 
  { path: 'hiring-solution', component: HiringSolutionComponent },// Login page
  { path: 'dashboard', component: EmpDashboardComponent },
  // { path: 'create-job-post', component: CreateJobPostComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' } // Wildcard for 404 redirects
];
