import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(private router: Router) {}
  onConnect() {
    this.router.navigateByUrl('about');
  }
  onExpertise() {
    this.router.navigateByUrl('expertise');
  }
  onProject() {
    this.router.navigateByUrl('project');
  }
  onResume() {
    this.router.navigateByUrl('resume');
  }
  onContact() {
    this.router.navigateByUrl('contact');
  }
  onHome() {}
}
