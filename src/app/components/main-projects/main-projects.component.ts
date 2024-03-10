import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProjectCardComponent } from './../project-card/project-card.component';
import { Project } from '../../model/project.model';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-main-projects',
  standalone: true,
  imports: [ProjectCardComponent, NgForOf, HttpClientModule],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.scss'
})
export class MainProjectsComponent implements OnInit {

  projects: Array<Project> = [];

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.findAllProjects();
  }

  findAllProjects() {
    this.http.get('./assets/projects.json').subscribe((data: any) => {
      this.projects = data;
    });
  }

}
