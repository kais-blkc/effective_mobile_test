import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks/components/tasks-list/tasks-list.component';

export const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'tasks', component: TasksListComponent},
];
