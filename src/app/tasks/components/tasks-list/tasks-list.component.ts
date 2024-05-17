import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { TaskInterface } from '../../types/task.interface';
import { TasksService } from '../../services/tasks.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ExecutorComponent } from '../share/executor/executor.component';
import { PriorityComponent } from '../share/priority/priority.component';
import { DeadlineComponent } from '../share/deadline/deadline.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { TaskTitleComponent } from '../share/task-title/task-title.component';
import { DeleteBtnComponent } from '../share/delete-btn/delete-btn.component';
import { TasksFilterComponent } from '../tasks-filter/tasks-filter.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { StatusCheckboxComponent } from '../share/status-checkbox/status-checkbox.component';
import {
	FilterNameEnum,
	FilterParamsInterface,
	FilterPropsInterface,
} from '../../types/filter.interface';

@Component({
	selector: 'tasks-list',
	standalone: true,
	imports: [
		CommonModule,
		MatSort,
		MatPaginator,
		MatSortModule,
		MatTableModule,
		MatButtonModule,
		MatDividerModule,
		MatPaginatorModule,
		StatusCheckboxComponent,
		DeadlineComponent,
		TaskTitleComponent,
		DeadlineComponent,
		PriorityComponent,
		ExecutorComponent,
		DeleteBtnComponent,
		TasksFilterComponent,
	],
	templateUrl: './tasks-list.component.html',
	styleUrl: './tasks-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent implements OnInit, OnDestroy, AfterViewInit {
	@Input() categoryID: number;
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;

	private tasksSubscription: Subscription;
	private filteredTasks: TaskInterface[];
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

	constructor(private tasksService: TasksService) {}

	ngOnInit(): void {
		this.dataSource = new MatTableDataSource(this.tasksService.tasks$.getValue());
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
			if (this.categoryID) {
				this.dataSource.data = this.tasksService.getTasksByCategoryID(this.categoryID);
			} else {
				this.dataSource.data = tasks;
			}
		});
	}

	onFilter(filterParams: FilterParamsInterface[]): void {
		let result = this.tasksService.tasks$.getValue();

		filterParams.forEach((filter) => {
			if (!filter.filterValue || filter.filterValue === '[]') return;
			result = result.filter((f) => JSON.stringify(f[filter.filterName]) === filter.filterValue);
		});

		this.dataSource.data = result;
	}

	onAddTask(): void {
		this.tasksService.addTask({ id: 0, title: '', categoryID: this.categoryID, status: false });
		this.goLastPaginatorPage();
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

	goLastPaginatorPage() {
		this.paginator.length = this.dataSource.data.length;
		this.dataSource.paginator = this.paginator;
		this.dataSource.paginator?.lastPage();
	}
}
