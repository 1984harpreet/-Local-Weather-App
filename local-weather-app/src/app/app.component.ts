import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <div style="text-align:center">
  <mat-toolbar color="primary">
      LocalCast Weather
  </mat-toolbar>
   <div>Your city, your forecast, right now!</div>
   <mat-card>
    <h2>Current Weather</h2>
    <app-current-weather></app-current-weather>
    </mat-card>
    <img mat-card-image src="assets/local.jpg">
    </div>
`
})
export class AppComponent {
  title = 'app';
}
