import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf } from '@angular/common';

import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';

import { ExperienceItem } from '../../../../model/experience-item.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-main-experience',
  standalone: true,
  imports: [TimelineModule, CommonModule, ButtonModule, NgForOf, ChipModule, NgIf, HttpClientModule],
  templateUrl: './main-experience.component.html',
  styleUrl: './main-experience.component.scss'
})
export class MainExperienceComponent implements OnInit {

  experiences: Array<ExperienceItem>;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.findAllExperience();
  }

  findAllExperience() {
    this.http.get('https://api.gutiermoran.com/experiences').subscribe((data: any) => {
      this.experiences = data;
      this.experiences.reverse();
    });
  }

}
