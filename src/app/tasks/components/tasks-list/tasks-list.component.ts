import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TaskInterface } from '../../types/task.interface';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';
import { Observable, map } from 'rxjs';

@Component({
	selector: 'tasks-list',
	standalone: true,
	imports: [MatDividerModule, MatListModule, MatButtonModule, CommonModule, TasksItemComponent],
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

	getTasks() {
		if (this.categoryID) {
			this.tasks$ = this.tasksService.tasks$.pipe(
				map((tasks) => tasks.filter((task) => task.categoryID === this.categoryID)),
			);
		} else {
			this.tasks$ = this.tasksService.tasks$;
		}
	}

	onAddTask() {
		this.tasksService.addTask({ id: 0, title: '', categoryID: this.categoryID });
	}

	onRemoveTask(taskId: number) {
		this.tasksService.removeTask(taskId);
	}

	onSetValue(task: TaskInterface) {
		if (task.title.length) {
			this.tasksService.updateTask(task);
		} else {
			this.tasksService.removeTask(task.id);
		}
	}
}
