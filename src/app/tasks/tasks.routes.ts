import { Routes } from '@angular/router';

export const tasksRoutes: Routes = [
	{
		path: 'tasks',
		loadComponent: () =>
			import('./components/tasks-all/tasks-all.component').then((m) => m.AllTasksComponent),
	},
	{
		path: 'tasks/:id',
		loadComponent: () =>
			import('./components/tasks-category-detail/tasks-category-detail.component').then(
				(m) => m.TasksCategoryDetailComponent,
			),
	},
];
