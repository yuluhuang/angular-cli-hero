import { Component, OnInit } from '@angular/core';
import { Hero } from './model/hero'
import { HeroService } from './hero.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
      private router: Router,
      private heroService: HeroService
  ) { 
  }
   getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    gotoDetail() {
        this.router.navigate(['/herodetail', this.selectedHero.id]);
    }

}
