import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
// import 'intersection-observer';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-projbody',
  standalone: true,
  imports: [NgxMarqueeComponent, ContactComponent],
  templateUrl: './projbody.component.html',
  styleUrl: './projbody.component.css',
})
export class ProjbodyComponent {
  constructor(private router: Router) {}
  // const IntersectionObserver = await import('intersection-observer');

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
  onContact() {
    this.router.navigateByUrl('contact');
  }
}
