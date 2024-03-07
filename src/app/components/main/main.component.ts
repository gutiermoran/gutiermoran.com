import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardModule, TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
