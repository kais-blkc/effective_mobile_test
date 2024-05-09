import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { TaskInterface } from '../../types/taskInterface';
import { TaskService } from '../../services/tasksService';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from '../tasks-item/tasks-item.component';

@Component({
	selector: 'tasks-list',
	standalone: true,
	imports: [MatDividerModule, MatListModule, MatButtonModule, CommonModule, TasksItemComponent],
	providers: [TaskService],
	templateUrl: './tasks-list.component.html',
	styleUrl: './tasks-list.component.scss',
})
export class TasksListComponent implements OnInit {
	public tasks$: Observable<TaskInterface[]>;

	constructor(private tasksService: TaskService) {}

	ngOnInit(): void {
		this.tasks$ = this.tasksService.tasks$;
	}

	onAddTask() {
		this.tasksService.addTask({ id: 0, title: '' });
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
