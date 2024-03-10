import { Component, Input } from '@angular/core';
import { Project } from '../../../../model/project.model';
import { NgFor, NgForOf, NgIf } from '@angular/common';

import { ChipModule } from 'primeng/chip';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgForOf, NgIf, ChipModule, PanelModule, ButtonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() project: Project;

}
