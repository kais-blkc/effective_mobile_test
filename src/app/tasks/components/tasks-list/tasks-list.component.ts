import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TaskInterface } from '../../types/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Observable, Subscription, map } from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatusCheckboxComponent } from '../share/status-checkbox/status-checkbox.component';
import { DeadlineComponent } from '../share/deadline/deadline.component';
import { TaskTitleComponent } from '../share/task-title/task-title.component';
import { PriorityComponent } from '../share/priority/priority.component';
import { ExecutorComponent } from '../share/executor/executor.component';
import { CommonModule } from '@angular/common';
import { DeleteBtnComponent } from '../share/delete-btn/delete-btn.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';

@Component({
	selector: 'tasks-list',
	standalone: true,
	imports: [
		CommonModule,
		MatTableModule,
		MatButtonModule,
		MatPaginator,
		MatPaginatorModule,
		MatDividerModule,
		MatSort,
		MatSortModule,
		StatusCheckboxComponent,
		DeadlineComponent,
		TaskTitleComponent,
		DeadlineComponent,
		PriorityComponent,
		ExecutorComponent,
		DeleteBtnComponent,
	],
	templateUrl: './tasks-list.component.html',
	styleUrl: './tasks-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit, OnDestroy, AfterViewInit {
	@Input() categoryID: number;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	public tasks$: Observable<TaskInterface[]>;
	public dataSource: MatTableDataSource<TaskInterface>;
	public displayedColumns: string[] = [
		'status',
		'title',
		'deadline',
		'priority',
		'executers',
		'delete',
	];
	private tasksSubscription: Subscription;

	constructor(private tasksService: TasksService) {}

	ngOnInit(): void {
		this.getTasks();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	ngOnDestroy(): void {
		this.tasksSubscription.unsubscribe();
	}

	getTasks(): void {
		this.tasksSubscription = this.tasksService.tasks$.subscribe((tasks) => {
			console.log('table updated');
			// prettier-ignore
			const curTasks = this.categoryID
				// if have category id return cur category tasks
				? tasks.filter((task) => task.categoryID === this.categoryID)
				// else return all tasks
				:	tasks;

			this.dataSource = new MatTableDataSource(curTasks);
		});
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
