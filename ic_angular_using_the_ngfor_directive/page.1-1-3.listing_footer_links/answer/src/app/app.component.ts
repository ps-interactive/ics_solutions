import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Carved Rock Fitness';
  categories: string[] = ['Clothing', 'Footwear', 'Equipment'];
  footerLinks: string[] = ['About Us', 'Careers', 'Contact Us'];
}
