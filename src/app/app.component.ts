import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  constructor(
  ) {
  }

}
