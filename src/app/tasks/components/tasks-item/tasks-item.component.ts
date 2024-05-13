import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { TaskInterface } from '../../types/task.interface';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeleteBtnComponent } from '../share/delete-btn/delete-btn.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DeadlineComponent } from '../share/deadline/deadline.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PriorityComponent } from '../share/priority/priority.component';

@Component({
	selector: 'tasks-item',
	standalone: true,
	imports: [
		FormsModule,
		MatIconModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		DeleteBtnComponent,
		DeadlineComponent,
		PriorityComponent,
	],
	providers: [provideNativeDateAdapter()],
	templateUrl: './tasks-item.component.html',
	styleUrl: './tasks-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksItemComponent implements AfterViewInit {
	@Input() task: TaskInterface;
	@Output() addTask: EventEmitter<void> = new EventEmitter<void>();
	@Output() removeTask: EventEmitter<number> = new EventEmitter<number>();
	@Output() setValue: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
	@ViewChild('titleInput') titleInputRef: ElementRef;

	onDate(date: string): void {
		this.task.deadline = date;
		this.setValue.emit(this.task);
	}

	onPriority(priority: string): void {
		this.task.priority = priority;
		this.setValue.emit(this.task);
	}

	ngAfterViewInit(): void {
		if (!this.task.title.length) {
			// SetTimeout because else Angular throw error: NG0100 ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.titleInputRef.nativeElement.focus();
			}, 0);
		}
	}
}
