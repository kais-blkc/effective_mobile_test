import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { LoadingComponent } from '../../../share/components/loading/loading.component';

@Component({
	selector: 'app-all-tasks',
	standalone: true,
	imports: [MatDividerModule, TasksListComponent, LoadingComponent],
	templateUrl: './tasks-all.component.html',
	styleUrl: './tasks-all.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTasksComponent {}
