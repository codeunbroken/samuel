import { Component } from '@angular/core';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import { Router } from '@angular/router';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
  onContact(){
    this.router.navigateByUrl('contact')
  }
}
