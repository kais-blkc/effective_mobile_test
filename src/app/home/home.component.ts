import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TasksCategoryComponent } from '../tasks/components/tasks-category/tasks-category.component';
import { TasksCategoryListComponent } from '../tasks/components/tasks-category-list/tasks-category-list.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MatDividerModule, TasksCategoryListComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
