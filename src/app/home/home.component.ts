import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { TasksCategoryListComponent } from '../tasks/components/tasks-category-list/tasks-category-list.component';
import { LoadingComponent } from '../share/components/loading/loading.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [MatDividerModule, TasksCategoryListComponent, LoadingComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
