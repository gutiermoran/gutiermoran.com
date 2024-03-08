import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';

import { ClipboardModule } from 'ngx-clipboard';
import { ClipboardService } from 'ngx-clipboard'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, DatePipe, ButtonModule, ClipboardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentDate = new Date();
  private email: string = "jose@gutiermoran.com";

  constructor(private readonly clipboardService: ClipboardService) { }

  copy() {
    this.clipboardService.copy(this.email);
  }
}
