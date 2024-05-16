import { UserInterface } from '../../share/types/user.interface';

export interface TaskInterface {
	id: number;
	title: string;
	status: boolean;
	deadline?: string;
	priority?: string;
	categoryID?: number;
	executers?: string[];
}
