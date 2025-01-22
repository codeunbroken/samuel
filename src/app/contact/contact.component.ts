import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
    this.router.navigateByUrl('resume');
  }
  onContact(){
    this.router.navigateByUrl('contact')
  }
}
