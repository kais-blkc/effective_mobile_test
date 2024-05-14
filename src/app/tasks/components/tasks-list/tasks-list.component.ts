import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TaskInterface } from '../../types/task.interface';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { Observable, map } from 'rxjs';
import { TasksFilterSortComponent } from '../tasks-filter-sort/tasks-filter-sort.component';

@Component({
	selector: 'tasks-list',
	standalone: true,
	imports: [
		MatDividerModule,
		MatListModule,
		MatButtonModule,
		CommonModule,
		TasksItemComponent,
		TasksFilterSortComponent,
	],
	providers: [TasksService],
	templateUrl: './tasks-list.component.html',
	styleUrl: './tasks-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit {
	@Input() categoryID: number;
	public tasks$: Observable<TaskInterface[]>;

	constructor(private tasksService: TasksService) {}

	ngOnInit(): void {
		this.getTasks();
	}

	// onTest() {
	// 	this.tasks$ = this.tasks$.pipe(map((tasks) => tasks.filter((task) => task.status === false)));
	// }

	getTasks(): void {
		// If this is category page
		if (this.categoryID) {
			this.tasks$ = this.tasksService.tasks$.pipe(
				map((tasks) => tasks.filter((task) => task.categoryID === this.categoryID)),
			);
		} else {
			this.tasks$ = this.tasksService.tasks$;
		}
	}

	onAddTask(): void {
		this.tasksService.addTask({ id: 0, title: '', categoryID: this.categoryID, status: false });
	}

	onRemoveTask(taskId: number): void {
		this.tasksService.removeTask(taskId);
	}

	onUpdateTask(task: TaskInterface): void {
		if (task.title.length) {
			this.tasksService.updateTask(task);
		} else {
			this.tasksService.removeTask(task.id);
		}
	}
}
