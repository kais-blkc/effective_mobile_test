import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserInterface } from '../../../../share/types/user.interface';
import { TaskInterface } from '../../../types/task.interface';
import { usersPlaceholder } from '../../../mok.data';

@Component({
	selector: 'app-executor',
	standalone: true,
	imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
	templateUrl: './executor.component.html',
	styleUrl: './executor.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutorComponent {
	@Input() task: TaskInterface;
	@Output() selected: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();

	public users: UserInterface[] = usersPlaceholder;

	onExecuters(executers: string[] | undefined): void {
		this.task.executers = executers;
		this.selected.emit(this.task);
	}
}
