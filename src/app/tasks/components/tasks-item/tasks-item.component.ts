import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
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

@Component({
	selector: 'tasks-item',
	standalone: true,
	imports: [FormsModule, MatIconModule, MatButtonModule, DeleteBtnComponent, DeadlineComponent],
	providers: [provideNativeDateAdapter()],
	templateUrl: './tasks-item.component.html',
	styleUrl: './tasks-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksItemComponent implements OnInit, AfterViewInit {
	@Input() task: TaskInterface;
	@Output() addTask: EventEmitter<void> = new EventEmitter<void>();
	@Output() removeTask: EventEmitter<number> = new EventEmitter<number>();
	@Output() setValue: EventEmitter<TaskInterface> = new EventEmitter<TaskInterface>();
	@ViewChild('titleInput') titleInputRef: ElementRef;

	ngOnInit(): void {}

	ngAfterViewInit(): void {
		if (!this.task.title.length) {
			// SetTimeout because else Angular throw error: NG0100 ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.titleInputRef.nativeElement.focus();
			}, 0);
		}
	}
}
