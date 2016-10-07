import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './hero/dashboard/dashboard.component';
import { HeroDetailComponent }      from './hero/hero-detail/hero-detail.component';
import { HeroComponent }      from './hero/hero.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        // name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: 'herodetail/:id',
        // name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        // name: 'Heroes',
        component: HeroComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);