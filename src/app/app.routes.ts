import { Routes } from '@angular/router';
import { FullprojectComponent } from './fullproject/fullproject.component';
import { ProfileComponent } from './profile/profile.component';
import { ExpertComponent } from './expert/expert.component';
import { ProjbodyComponent } from './projbody/projbody.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: FullprojectComponent },
  { path: 'about', component: ProfileComponent },
  { path: 'expertise', component: ExpertComponent },
  { path: 'project', component: ProjbodyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'resume', component: ResumeComponent },
];
