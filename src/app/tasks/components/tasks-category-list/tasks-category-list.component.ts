import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TasksCategoryService } from '../../services/tasks-category.service';
import { TasksCategoryInterface } from '../../types/tasks-category.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TasksCategoryComponent } from '../tasks-category/tasks-category.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
	selector: 'tasks-category-list',
	standalone: true,
	imports: [CommonModule, TasksCategoryComponent, MatButtonModule, RouterModule],
	templateUrl: './tasks-category-list.component.html',
	styleUrl: './tasks-category-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoryListComponent implements OnInit {
	public categories$: Observable<TasksCategoryInterface[]>;

	constructor(
		private categoryServices: TasksCategoryService,
		private tasksService: TasksService,
	) {}

	ngOnInit(): void {
		this.categories$ = this.categoryServices.categories$;
	}

	onAddCategory() {
		this.categoryServices.addCategory({ id: 0, title: '' });
	}

	onRemoveCategory(catId: number) {
		this.categoryServices.removeCategory(catId);
		this.tasksService.removeTaskByCategoryId(catId);
	}

	onUpdateCategory(cat: TasksCategoryInterface) {
		if (cat.title.length) {
			this.categoryServices.updateCategory(cat);
		} else {
			this.categoryServices.removeCategory(cat.id);
		}
	}
}
