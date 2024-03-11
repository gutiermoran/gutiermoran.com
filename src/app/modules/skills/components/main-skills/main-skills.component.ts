import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Technology } from '../../../../model/technology.model';

import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-main-skills',
  standalone: true,
  imports: [HttpClientModule, NgForOf, TooltipModule],
  templateUrl: './main-skills.component.html',
  styleUrl: './main-skills.component.scss'
})
export class MainSkillsComponent {

  technologies: Array<Technology> = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.findAllTechnologies();
  }

  findAllTechnologies() {
    this.http.get('./assets/skills.json').subscribe((data: any) => {
      this.technologies = data;
    });
  }

}
