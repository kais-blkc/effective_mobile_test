import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { TaskInterface } from '../../../types/task.interface';

@Component({
	selector: 'app-status-checkbox',
	standalone: true,
	imports: [FormsModule, MatCheckbox],
	templateUrl: './status-checkbox.component.html',
	styleUrl: './status-checkbox.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusCheckboxComponent {
	@Input() task: TaskInterface;
	@Output() updateTask: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
}
