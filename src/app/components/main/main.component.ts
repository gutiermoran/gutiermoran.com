import { Component } from '@angular/core';

import { MainProjectsComponent } from '../../modules/projects/components/main-projects/main-projects.component';
import { MainSkillsComponent } from '../../modules/skills/components/main-skills/main-skills.component';
import { MainExperienceComponent } from '../../modules/experience/components/main-experience/main-experience.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainProjectsComponent, MainSkillsComponent, MainExperienceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
