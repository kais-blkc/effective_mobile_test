import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
	ViewChild,
} from '@angular/core';
import { TaskInterface } from '../../types/task.interface';
import { Observable, Subscription, filter, map } from 'rxjs';
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
export class TasksCategoryComponent implements OnInit, AfterViewInit, OnDestroy {
	@Input() category: TasksCategoryInterface;
	@Output() addCategory: EventEmitter<void> = new EventEmitter<void>();
	@Output() removeCategory: EventEmitter<number> = new EventEmitter<number>();
	@Output() updateCategory: EventEmitter<TasksCategoryInterface> =
		new EventEmitter<TasksCategoryInterface>();
	@ViewChild('categoryInputRef') categoryInputRef: ElementRef;

	public tasks: TaskInterface[];
	public tasksSubscription: Subscription;

	constructor(private tasksService: TasksService) {}

	ngOnInit(): void {
		this.tasksSubscription = this.tasksService.tasks$.subscribe((tasks) => {
			this.tasks = this.tasksService.getTasksByCategoryID(this.category.id);
		});
	}

	ngOnDestroy(): void {
		this.tasksSubscription.unsubscribe();
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
