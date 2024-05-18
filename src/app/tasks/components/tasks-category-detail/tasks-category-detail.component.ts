import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksCategoryService } from '../../services/tasks-category.service';
import { TasksCategoryInterface } from '../../types/tasks-category.interface';
import { MatDividerModule } from '@angular/material/divider';
import { Subscription } from 'rxjs';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../share/components/loading/loading.component';
import { DeleteBtnComponent } from '../share/delete-btn/delete-btn.component';
import { TasksService } from '../../services/tasks.service';

@Component({
	selector: 'tasks-category-detail',
	standalone: true,
	imports: [
		MatDividerModule,
		TasksListComponent,
		CommonModule,
		LoadingComponent,
		DeleteBtnComponent,
	],
	templateUrl: './tasks-category-detail.component.html',
	styleUrl: './tasks-category-detail.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksCategoryDetailComponent implements OnInit, OnDestroy {
	private routeSubscription: Subscription;
	public category: TasksCategoryInterface;
	public categoryID: number;

	constructor(
		private activatedRoute: ActivatedRoute,
		private categoryService: TasksCategoryService,
		private tasksService: TasksService,
		private router: Router,
	) {
		this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
			this.categoryID = +params['id'];
		});
	}

	ngOnInit(): void {
		this.getCurCategory();
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}

	getCurCategory(): void {
		this.category = this.categoryService.getCategoryById(this.categoryID)!;
	}

	onRemoveCategory(categoryID: number): void {
		this.tasksService.removeTaskByCategoryId(categoryID);
		this.categoryService.removeCategory(categoryID);
		this.router.navigate(['/']);
	}
}
