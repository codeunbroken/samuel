import { Component } from '@angular/core';
import { ExtendedComponent } from '../extended/extended.component';

@Component({
  selector: 'app-expert',
  standalone: true,
  imports: [ExtendedComponent],
  templateUrl: './expert.component.html',
  styleUrl: './expert.component.css'
})
export class ExpertComponent {

}
