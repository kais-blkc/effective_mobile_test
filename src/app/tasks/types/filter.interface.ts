import { TaskInterface } from './task.interface';

export enum FilterNameEnum {
	deadline = 'deadline',
	priority = 'priority',
	executers = 'executers',
}

export interface FilterPropsInterface {
	task: TaskInterface;
	filterName: FilterNameEnum;
}

export interface FilterParamsInterface {
	filterName: FilterNameEnum;
	filterValue: string | undefined;
}
