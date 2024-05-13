import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksCategoryService } from '../../services/tasks-category.service';
import { TasksCategoryInterface } from '../../types/tasks-category.interface';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { TaskInterface } from '../../types/task.interface';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'tasks-category-detail',
	standalone: true,
	imports: [MatDividerModule, TasksListComponent, CommonModule],
	providers: [TasksCategoryService],
	templateUrl: './tasks-category-detail.component.html',
	styleUrl: './tasks-category-detail.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoryDetailComponent implements OnInit {
	public tasks$: Observable<TaskInterface[]> = new Observable<TaskInterface[]>();
	public tasks: TaskInterface[];
	public category: TasksCategoryInterface;
	public categoryID: number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private categoryService: TasksCategoryService,
	) {
		this.activatedRoute.params.subscribe((params) => {
			this.categoryID = +params['id'];
		});
	}

	ngOnInit(): void {
		this.getCurCategory();
	}

	getCurCategory() {
		this.category = this.categoryService.getCategoryById(this.categoryID)!;
	}
}
