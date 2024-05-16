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
import { Observable, filter, map } from 'rxjs';
import { TasksService } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { TasksCategoryInterface } from '../../types/tasks-category.interface';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBtnComponent } from '../share/delete-btn/delete-btn.component';

@Component({
	selector: 'tasks-category',
	standalone: true,
	imports: [
		CommonModule,
		NgPipesModule,
		MatCardModule,
		FormsModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		DeleteBtnComponent,
	],
	templateUrl: './tasks-category.component.html',
	styleUrl: './tasks-category.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoryComponent implements OnInit, AfterViewInit {
	@Input() category: TasksCategoryInterface;
	@Output() addCategory: EventEmitter<void> = new EventEmitter<void>();
	@Output() removeCategory: EventEmitter<number> = new EventEmitter<number>();
	@Output() updateCategory: EventEmitter<TasksCategoryInterface> =
		new EventEmitter<TasksCategoryInterface>();
	@ViewChild('categoryInputRef') categoryInputRef: ElementRef;

	public tasks$: Observable<TaskInterface[]>;

	constructor(private tasksService: TasksService) {}

	ngOnInit(): void {
		this.tasks$ = this.tasksService.tasks$.pipe(
			map((tasks) => tasks.filter((task) => task.categoryID === this.category.id)),
		);
	}

	ngAfterViewInit(): void {
		if (!this.category.title.length) {
			// SetTimeout because else Angular throw error: NG0100 ExpressionChangedAfterItHasBeenCheckedError
			setTimeout(() => {
				this.categoryInputRef.nativeElement.focus();
			}, 0);
		}
	}
}
