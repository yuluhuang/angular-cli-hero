import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroService } from './hero/hero.service';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent, DashboardComponent, HeroDetailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
