import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DeadlineComponent } from '../share/deadline/deadline.component';
import { PriorityComponent } from '../share/priority/priority.component';
import { ExecutorComponent } from '../share/executor/executor.component';
import { TaskInterface } from '../../types/task.interface';
import {
	FilterNameEnum,
	FilterParamsInterface,
	FilterPropsInterface,
} from '../../types/filter.interface';

@Component({
	selector: 'app-tasks-filter',
	standalone: true,
	imports: [DeadlineComponent, PriorityComponent, ExecutorComponent],
	templateUrl: './tasks-filter.component.html',
	styleUrl: './tasks-filter.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterComponent {
	@Output() filter: EventEmitter<FilterParamsInterface[]> = new EventEmitter<
		FilterParamsInterface[]
	>();

	public filterNameEnum = FilterNameEnum;
	public filterParams: FilterParamsInterface[] = [];

	public task: TaskInterface = {
		id: 0,
		status: false,
		title: '',
	};

	onSelected(task: TaskInterface, filterName: FilterNameEnum): void {
		// prettier-ignore
		const filterValue = task[filterName]?.length || task[filterName] instanceof Object 
      ? JSON.stringify(task[filterName])
			:	undefined;

		this.filterParams = this.filterParams.filter((f) => f.filterName !== filterName);
		this.filterParams = [...this.filterParams, { filterName, filterValue }];

		this.filter.emit(this.filterParams);
	}
}
