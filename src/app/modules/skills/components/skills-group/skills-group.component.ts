import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { SkillsGroup } from '../../../../model/skills-group.model';
import { NgForOf } from '@angular/common';

import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-skills-group',
  standalone: true,
  imports: [NgForOf, ChipModule],
  templateUrl: './skills-group.component.html',
  styleUrl: './skills-group.component.scss'
})
export class SkillsGroupComponent {

  @Input() skillsGroup: SkillsGroup;

}
