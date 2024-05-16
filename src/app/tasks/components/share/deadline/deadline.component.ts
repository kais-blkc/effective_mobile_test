import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBtnComponent } from '../delete-btn/delete-btn.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { TaskInterface } from '../../../types/task.interface';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
	selector: 'app-deadline',
	standalone: true,
	imports: [
		FormsModule,
		MatIconModule,
		MatButtonModule,
		DeleteBtnComponent,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatCalendar,
	],
	templateUrl: './deadline.component.html',
	styleUrl: './deadline.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [provideNativeDateAdapter()],
})
export class DeadlineComponent {
	@Input() task: TaskInterface;
	@Output() selected: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();

	public date: string;

	onResetDate(): void {
		this.task.deadline = '';
		this.selected.emit(this.task);
	}

	onDate(deadline: string | undefined): void {
		this.task.deadline = deadline;
		this.selected.emit(this.task);
	}
}
