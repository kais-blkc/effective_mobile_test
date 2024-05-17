import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { tasksRoutes } from './tasks/tasks.routes';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) },
	...tasksRoutes,
	{
		path: '**',
		loadComponent: () =>
			import('./error-page/error-page.component').then((m) => m.ErrorPageComponent),
	},
];
