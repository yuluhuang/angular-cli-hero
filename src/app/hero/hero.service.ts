import { Injectable } from '@angular/core';
import { Hero } from './model/hero'
import { HEROES } from './model/mock-heroes'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	// private heroesUrl = 'app/heroes';  // URL to web api

	constructor(private http: Http) { }
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
	getHero(id: number): Promise<Hero> {
		return Promise.resolve(HEROES).then(
			heroes => heroes.filter(hero => hero.id === id)[0]
		);
	}
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise<Hero[]>(resolve => setTimeout(resolve(HEROES), 2000))
			.then(() => this.getHeroes())
	}

}
