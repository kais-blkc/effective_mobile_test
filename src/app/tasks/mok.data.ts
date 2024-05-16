import { UserInterface } from '../share/types/user.interface';
import { TaskInterface } from './types/task.interface';
import { TasksCategoryInterface } from './types/tasks-category.interface';

export const placeholderTasks: TaskInterface[] = [
	{
		id: 1,
		title: 'Пойти в СуперМегаГипер Маркет',
		status: true,
		categoryID: 1,
		deadline: '2024-05-17T21:00:00.000Z',
		priority: 'green',
		executers: ['John', 'Milena'],
	},
	{
		id: 2,
		title: 'Купить яйца',
		status: true,
		categoryID: 1,
		priority: 'green',
		executers: ['John', 'Milena'],
	},
	{
		id: 3,
		title: 'Купить молоко',
		status: false,
		categoryID: 1,
	},
	{
		id: 4,
		title: 'Купить хлеб',
		status: false,
		categoryID: 1,
	},
	{
		id: 5,
		title: 'Купить сыр',
		status: false,
		categoryID: 1,
	},
	{
		id: 6,
		title: 'Сделать верстку',
		status: true,
		categoryID: 2,
		deadline: '2024-05-19T21:00:00.000Z',
		priority: 'green',
		executers: ['John'],
	},
	{
		id: 7,
		title: 'Сделать фронт на Angular',
		status: false,
		categoryID: 2,
		priority: 'blue',
		executers: ['John'],
	},
	{
		id: 8,
		title: 'Решить баги в проекте',
		status: false,
		categoryID: 2,
		priority: 'yellow',
		deadline: '2024-05-17T21:00:00.000Z',
		executers: ['John'],
	},
	{
		id: 9,
		title: 'Заказать ленту',
		status: true,
		categoryID: 3,
		priority: 'green',
		deadline: '2024-05-15T21:00:00.000Z',
		executers: ['John'],
	},
	{
		id: 10,
		title: 'Приклеить ленту к полкам на кухне',
		status: false,
		categoryID: 3,
		priority: 'green',
		deadline: '2024-05-18T21:00:00.000Z',
	},
	{
		id: 11,
		title: 'Убраться на рабочем столе',
		status: false,
		categoryID: 3,
		priority: 'yellow',
		executers: ['Milena'],
	},
	{
		id: 12,
		title: 'Убраться на рабочем стуле',
		status: false,
		categoryID: 3,
		priority: 'red',
		executers: ['Milena'],
	},
];

export const placeholderCats: TasksCategoryInterface[] = [
	{ id: 1, title: 'Продукты' },
	{ id: 2, title: 'Работа' },
	{ id: 3, title: 'Дом' },
];

export const usersPlaceholder: UserInterface[] = [
	{ id: 1, name: 'John', email: 'john@mail.com' },
	{ id: 2, name: 'Milena', email: 'milena@mail.com' },
];
