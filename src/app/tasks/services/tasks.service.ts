import { BehaviorSubject, Observable } from 'rxjs';
import { TaskInterface } from '../types/task.interface';
import { Injectable } from '@angular/core';
import { placeholderTasks } from '../mok.data';

@Injectable({ providedIn: 'root' })
export class TasksService {
	private _tasksId: number = 0;
	private _tasks: TaskInterface[] = placeholderTasks;
	public tasks$: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<TaskInterface[]>([]);

	constructor() {
		this.getTasks();

		this.tasks$.subscribe((tasks) => {
			this._tasksId = tasks.length;
			this.saveTasksIdInLocalStorage(tasks.length);
			this.saveTasksInLocalStorage(tasks);
		});
	}

	getTasks(): void {
		const JSONLocalTasks = localStorage.getItem('tasks');

		if (JSONLocalTasks) {
			const localTasks: TaskInterface[] = JSON.parse(JSONLocalTasks);
			this._tasks = [...localTasks];
		}

		this.tasks$.next(this._tasks);
		this.setTasksIdFromLocalStorage();
	}

	removeTaskByCategoryId(catID: number): void {
		this._tasks = this._tasks.filter((task) => task.categoryID !== catID);
		this.tasks$.next(this._tasks);
	}

	addTask(task: TaskInterface): void {
		task.id = ++this._tasksId;
		this._tasks = [...this._tasks, task];
		this.tasks$.next(this._tasks);

		this.saveTasksIdInLocalStorage(task.id);
	}

	removeTask(taskId: number): void {
		this._tasks = this._tasks.filter((task) => task.id !== taskId);
		this.tasks$.next(this._tasks);
	}

	updateTask(updatedTask: TaskInterface): void {
		this._tasks.forEach((task, index) => {
			if (task.id === updatedTask.id) {
				this._tasks[index] = updatedTask;
			}
		});

		this.tasks$.next(this._tasks);
	}

	/* Methods for LocalStorage */
	private saveTasksInLocalStorage(tasks: TaskInterface[]): void {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}

	private saveTasksIdInLocalStorage(taskId: number): void {
		localStorage.setItem('taskId', JSON.stringify(taskId));
	}

	private setTasksIdFromLocalStorage(): void {
		const taskId = localStorage.getItem('taskId');

		if (taskId) {
			this._tasksId = JSON.parse(taskId);
		}
	}
}
