import { BehaviorSubject } from 'rxjs';
import { TaskInterface } from '../types/taskInterface';
import { Injectable } from '@angular/core';

const placeholderTasks: TaskInterface[] = [
	{ id: 0, title: 'one' },
	{ id: 1, title: 'two' },
	{ id: 2, title: 'three' },
];

@Injectable()
export class TaskService {
	private _tasksId: number = 0;
	private _tasks: TaskInterface[] = placeholderTasks;
	public tasks$: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<
		TaskInterface[]
	>([]);

	constructor() {
		this.getTasks();

		this.tasks$.subscribe((tasks) => {
			this._tasksId = tasks.length;
		});
	}

	getTasks() {
		this.tasks$.next(this._tasks);
	}

	addTask(task: TaskInterface) {
		this._tasks = [...this._tasks, task];
		task.id = this._tasksId;
		this.tasks$.next(this._tasks);
	}

	removeTask(taskId: number) {
		this._tasks = this._tasks.filter((task) => task.id !== taskId);
		this.tasks$.next(this._tasks);
	}

	updateTask(updatedTask: TaskInterface) {
		this._tasks.forEach((task, index) => {
			if (task.id === updatedTask.id) {
				this._tasks[index] = updatedTask;
			}
		});

		this.tasks$.next(this._tasks);
	}
}
