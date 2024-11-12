import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, ComponentRef, HostListener, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CreateJobPostComponent } from '../create-job-post/create-job-post.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-slider',
  standalone: true,
  imports: [CommonModule,CreateJobPostComponent,FormsModule,RouterLink],
  templateUrl: './vertical-slider.component.html',
  styleUrl: './vertical-slider.component.css'
})
export class VerticalSliderComponent{
  activeStep: number = 1; // First step is active by default

  activateStep(step: number) {
    this.activeStep = step; // Set the active step to the clicked step
  }
  isMobileView = false;
  constructor() {
    this.checkMobileView(); // Check on initial load
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobileView();
  }

  // Check if the screen width is 768px or smaller
  checkMobileView() {
    this.isMobileView = window.innerWidth <= 768;
  }

}
