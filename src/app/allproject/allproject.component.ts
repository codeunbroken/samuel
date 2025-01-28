import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproject',
  standalone: true,
  imports: [],
  templateUrl: './allproject.component.html',
  styleUrl: './allproject.component.css'
})
export class AllprojectComponent {
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
  onContact(){
    this.router.navigateByUrl('contact')
  }
  allProjects(){
    this.router.navigateByUrl('allprojects')
  }
}
