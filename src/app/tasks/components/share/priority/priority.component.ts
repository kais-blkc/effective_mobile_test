import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PriorityInterface, PriorityEnum } from '../../../types/priority.interface';

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
	@Input() value: string | undefined;
	@Output() selected: EventEmitter<string> = new EventEmitter<string>();

	public priorities: PriorityInterface[] = prioritiesPlaceholder;

	constructor() {}
}
