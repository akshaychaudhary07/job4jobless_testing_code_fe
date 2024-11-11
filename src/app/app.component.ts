import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentboxComponent } from './contentbox/contentbox.component';
import { AboutUsComponent } from './about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,  // Add RouterModule here
    HeaderComponent,  // Include HeaderComponent
    FooterComponent,
    ContentboxComponent,
    AboutUsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSpecialRoute = false;

  // Explicitly define the type for navItems
  navItems: { label: string; link: string; isDropdown?: boolean; dropdownItems?: { label: string, link: string }[] }[] = [];  

  defaultNavItems = [
    { label: 'Find Jobs', link: '/find-jobs' },
    { label: 'Services', link: '/services' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'Employer', link: '/employer' },
  ];

  employerNavItems = [
    { label: 'Hiring-solution', link: '/hiring-solution' },
    { label: 'Dashboard', link: '/dashboard' },
  ];

  // Adjusted the sequence: Post Job -> Job Posted dropdown -> Applied Users
  dashboardNavItems = [
    { label: 'Post Job', link: '/post-job' },
    { 
      label: 'Job Posted', 
      link: '/job-posted', 
      isDropdown: true, 
      dropdownItems: [
        { label: 'Manage Jobs', link: '/manage-jobs' },
        { label: 'View Applications', link: '/view-applications' },
      ]
    },
    { label: 'Applied Users', link: '/applied-users' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial navItems based on the current URL
    this.updateNavItemsBasedOnRoute(this.router.url);

    // Update navItems whenever navigation occurs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateNavItemsBasedOnRoute(event.urlAfterRedirects);
    });
  }

  private updateNavItemsBasedOnRoute(url: string) {
    if (url.includes('/dashboard')) {
      this.isSpecialRoute = true;
      this.navItems = this.dashboardNavItems;  // Use dashboard nav items (with dropdown for 'Job Posted')
    } else if (url.includes('/employer') || url.includes('/hiring-solution')) {
      this.isSpecialRoute = true;
      this.navItems = this.employerNavItems;  // Use employer nav items without dropdown
    } else {
      this.isSpecialRoute = false;
      this.navItems = this.defaultNavItems;  // Use default nav items
    }
    console.log('Current navItems:', this.navItems);
  }
}
