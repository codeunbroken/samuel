import { Component } from '@angular/core';
import { ExtendedComponent } from '../extended/extended.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [ExtendedComponent],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css'
})
export class ExpertComponent {
  constructor(private router: Router) {}
  onHome() {
    this.router.navigateByUrl('home');
  }
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
    this.router.navigateByUrl('Resume');
  } 
}
