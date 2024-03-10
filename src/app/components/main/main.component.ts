import { Component } from '@angular/core';

import { MainProjectsComponent } from './../main-projects/main-projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainProjectsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
