import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular8Project';
  country = [
    { id: 1, name: 'Bangladesh' },
    { id: 2, name: 'India' },
    { id: 3, name: 'Pakistan' },
    { id: 4, name: 'Nepal' },
    { id: 5, name: 'Bhutan' },
  ];
}
