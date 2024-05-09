import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Output,
	ViewChild,
} from '@angular/core';
import { TaskInterface } from '../../types/taskInterface';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'tasks-item',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './tasks-item.component.html',
	styleUrl: './tasks-item.component.scss',
})
export class TasksItemComponent implements AfterViewInit {
	@Input() task: TaskInterface;
	@Output() addTask: EventEmitter<null> = new EventEmitter<null>();
	@Output() removeTask: EventEmitter<number> = new EventEmitter<number>();
	@Output() setValue: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
	@ViewChild('titleInput') titleInputRef: ElementRef;

	ngAfterViewInit(): void {
		if (!this.task.title.length) {
			// SetTimeout because else Angular throw error: NG0100 ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.titleInputRef.nativeElement.focus();
			}, 0);
		}
	}
}
