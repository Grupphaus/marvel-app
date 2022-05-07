import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:  `
    <!-- Header -->
    <app-header></app-header>
    <!-- Routes render -->
    <section class="marvel-navigation-container">
      <router-outlet></router-outlet>
    </section>
    <!-- Footer -->
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'marvel-heroes';
}
