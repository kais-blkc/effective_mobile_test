import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { tasksRoutes } from './tasks/tasks.routes';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	...tasksRoutes,
	{ path: '**', component: ErrorPageComponent },
];
