import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'marvel-heroes';

  public setRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData;
  }
}
