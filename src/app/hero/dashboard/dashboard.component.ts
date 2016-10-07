import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { Router, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = []
	constructor(private router: Router, private heroServuce: HeroService) { }

	ngOnInit() {
		this.heroServuce.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
	gotoDetail(hero: Hero) {
		let link = ['/herodetail', hero.id];
		this.router.navigate(link);
	}


}
