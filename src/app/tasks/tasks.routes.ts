import { Routes } from '@angular/router';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksCategoryDetailComponent } from './components/tasks-category-detail/tasks-category-detail.component';

export const tasksRoutes: Routes = [
	{ path: 'tasks', component: TasksListComponent },
	{ path: 'tasks-category/:id', component: TasksCategoryDetailComponent },
];
