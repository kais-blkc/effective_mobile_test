import {
	Input,
	Output,
	Component,
	ViewChild,
	ElementRef,
	EventEmitter,
	AfterViewInit,
	ChangeDetectionStrategy,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskInterface } from '../../../types/task.interface';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
	selector: 'app-task-title',
	standalone: true,
	imports: [FormsModule, MatInputModule, MatFormFieldModule],
	templateUrl: './task-title.component.html',
	styleUrl: './task-title.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTitleComponent implements AfterViewInit {
	@Input() task: TaskInterface;
	@Output() addTask: EventEmitter<void> = new EventEmitter<void>();
	@Output() updateTask: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
	@ViewChild('taskInput') titleInputRef: ElementRef;

	// Суета...
	// Focus on input when add task
	ngAfterViewInit(): void {
		if (!this.task.title.length) {
			// SetTimeout because else Angular throw error: NG0100 ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.titleInputRef.nativeElement.focus();
			}, 0);
		}
	}
}
