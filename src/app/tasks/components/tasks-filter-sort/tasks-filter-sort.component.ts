import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface valueItemInterface {
	id: string | number;
	filterValue: string;
}

const filtersPlaceholder = [
	{
		id: 'status',
		name: 'Статус задачи',
		filterValue: [
			{ name: 'Выполненно', value: true },
			{ name: 'Не выполненно', value: false },
		],
	},
];

@Component({
	selector: 'tasks-filter-sort',
	standalone: true,
	imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
	templateUrl: './tasks-filter-sort.component.html',
	styleUrl: './tasks-filter-sort.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksFilterSortComponent {
	@Input() value: valueItemInterface[];
	@Output() selected: EventEmitter<void> = new EventEmitter<void>();

	public filters = filtersPlaceholder;

	onSelected(value: any) {
		console.log(value);
	}
}
