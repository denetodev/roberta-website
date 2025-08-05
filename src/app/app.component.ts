import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroSectionComponent } from './features/landing-page/components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'roberta-website';
}
