 import { Component } from '@angular/core';
 
 @Component({
   selector: 'main-app',
   template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <p>{{currentPromotion}}</p>
    </div>
   `
 })
 
export class AppComponent {
  pageTitle: string = 'Carved Rock Fitness';
  currentPromotion: string = '20% off throughout the season';
}
