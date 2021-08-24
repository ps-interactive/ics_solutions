import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Carved Rock Fitness';
  categories: string[] = ['Clothing', 'Footwear', 'Equipment'];
  teamMembers: string[] = ['sam smith', 'brooke benson', 'river ramirez', 'emery ellen'];
  dailyDeal: { product: string, price: number } = { product: 'Boots', price: 30.99 };
}
