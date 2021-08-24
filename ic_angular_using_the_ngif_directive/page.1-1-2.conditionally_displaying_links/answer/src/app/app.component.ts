import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Carved Rock Fitness';
  currentPromotion: string = '20% off throughout the season';

  isLoggedIn: boolean = true;
  isVerified: boolean = false;
  hasAccessLink: boolean = true;
}
