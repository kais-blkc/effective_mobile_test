import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PriorityInterface, PriorityEnum } from '../../../types/priority.interface';
import { TaskInterface } from '../../../types/task.interface';

const prioritiesPlaceholder: PriorityInterface[] = [
	{ color: 'green', value: PriorityEnum.green },
	{ color: 'yellow', value: PriorityEnum.yellow },
	{ color: 'red', value: PriorityEnum.red },
	{ color: 'blue', value: PriorityEnum.blue },
];

@Component({
	selector: 'app-priority',
	standalone: true,
	imports: [MatFormFieldModule, MatSelectModule],
	templateUrl: './priority.component.html',
	styleUrl: './priority.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriorityComponent {
	@Input() task: TaskInterface;
	@Output() selected: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();

	public priorities: PriorityInterface[] = prioritiesPlaceholder;

	onPriority(priority: string | undefined): void {
		this.task.priority = priority;
		this.selected.emit(this.task);
	}
}
