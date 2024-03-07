import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [DropdownModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {

  languages: Language[] | undefined;

  selectedLanguage: Language = { name: 'APP.LANGUAGE.ENGLISH', code: 'en' };

  constructor(private readonly translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    this.languages = [
      { name: 'APP.LANGUAGE.ENGLISH', code: 'en' },
      { name: 'APP.LANGUAGE.SPANISH', code: 'es' }
    ];
  }

  updateLanguage() {
    this.translate.use(this.selectedLanguage.code);
  }
}