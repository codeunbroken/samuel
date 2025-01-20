import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMarqueeComponent } from '@omnedia/ngx-marquee';
import 'intersection-observer';



@Component({
  selector: 'app-projbody',
  standalone: true,
  imports: [NgxMarqueeComponent],
  templateUrl: './projbody.component.html',
  styleUrl: './projbody.component.css'
})
export class ProjbodyComponent {
constructor(private router:Router){}
onHome(){
  this.router.navigateByUrl('home');
}
onConnect(){
  this.router.navigateByUrl('about');
}
onExpertise(){
  this.router.navigateByUrl('expertise');
}
onProject(){
  this.router.navigateByUrl('project');
}
onResume(){
  this.router.navigateByUrl('resume');
}
}
