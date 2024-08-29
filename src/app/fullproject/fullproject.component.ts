import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxDotpatternComponent } from '@omnedia/ngx-dotpattern';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';

@Component({
  selector: 'app-fullproject',
  standalone: true,
  imports: [NgxDotpatternComponent, NgxAuroraComponent],
  templateUrl: './fullproject.component.html',
  styleUrl: './fullproject.component.css'
})
export class FullprojectComponent {
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
