import { Component } from '@angular/core';
import { IndexBody2Component } from '../index-body2/index-body2.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [IndexBody2Component],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
