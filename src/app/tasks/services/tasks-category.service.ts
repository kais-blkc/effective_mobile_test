import { BehaviorSubject, filter, map } from 'rxjs';
import { TaskInterface } from '../types/task.interface';
import { TasksCategoryInterface } from '../types/tasks-category.interface';
import { TasksService } from './tasks.service';
import { Injectable } from '@angular/core';

const placeholderCats: TasksCategoryInterface[] = [
	{ id: 0, title: '1 cat' },
	{ id: 1, title: '2 cat' },
	{ id: 2, title: '3 cat' },
];

@Injectable({ providedIn: 'root' })
export class TasksCategoryService {
	private _categoriesId: number = 0;
	private _categories: TasksCategoryInterface[] = placeholderCats;
	public categories$: BehaviorSubject<TasksCategoryInterface[]> = new BehaviorSubject<
		TasksCategoryInterface[]
	>([]);
	private curTasks: TaskInterface[];

	constructor(private tasksService: TasksService) {
		this.getCategories();

		this.categories$.subscribe((cats) => {
			this._categoriesId = cats.length;
			this.saveCategoriesIdInLocalStorage(cats.length);
			this.saveCategoriesInLocalStorage(cats);
		});
	}

	getCategories() {
		const JSONCats = localStorage.getItem('categories');

		if (JSONCats) {
			const localCats: TaskInterface[] = JSON.parse(JSONCats);
			this._categories = [...localCats];
			this.categories$.next(localCats);
			this.setCategoriesIdFromLocalStorage();
		}
	}

	getCategoryById(catId: number) {
		return this._categories.find((cat) => {
			return cat.id === catId;
		});
	}

	addCategory(category: TasksCategoryInterface) {
		category.id = ++this._categoriesId;
		this._categories = [...this._categories, category];
		this.categories$.next(this._categories);

		this.saveCategoriesIdInLocalStorage(category.id);
	}

	removeCategory(catId: number) {
		this._categories = this._categories.filter((cat) => cat.id !== catId);
		this.categories$.next(this._categories);
	}

	updateCategory(updatedCat: TasksCategoryInterface) {
		this._categories.forEach((cat, index) => {
			if (cat.title === updatedCat.title) {
				this._categories[index] = updatedCat;
			}
		});

		this.categories$.next(this._categories);
	}

	/* Methods for LocalStorage */
	private saveCategoriesInLocalStorage(categories: TasksCategoryInterface[]): void {
		localStorage.setItem('categories', JSON.stringify(categories));
	}

	private saveCategoriesIdInLocalStorage(categoriesId: number): void {
		localStorage.setItem('categoriesId', JSON.stringify(categoriesId));
	}

	private setCategoriesIdFromLocalStorage(): void {
		const catsId = localStorage.getItem('categoriesId');

		if (catsId) {
			this._categoriesId = JSON.parse(catsId);
		}
	}
}
