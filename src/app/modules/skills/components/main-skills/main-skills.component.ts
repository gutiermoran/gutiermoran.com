import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { SkillsGroup } from '../../../../model/skills-group.model';
import { SkillsGroupComponent } from '../skills-group/skills-group.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-main-skills',
  standalone: true,
  imports: [HttpClientModule, SkillsGroupComponent, NgForOf],
  templateUrl: './main-skills.component.html',
  styleUrl: './main-skills.component.scss'
})
export class MainSkillsComponent {

  skillsGroups: Array<SkillsGroup> = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.findAllSkillsGroups();
  }

  findAllSkillsGroups() {
    this.http.get('./assets/skills.json').subscribe((data: any) => {
      this.skillsGroups = data;
    });
  }

}
