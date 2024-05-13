export enum PriorityEnum {
	'green' = 'По полану',
	'yellow' = 'Под угрозовой',
	'red' = 'Отстает',
	'blue' = 'Отложено',
}

export interface PriorityInterface {
	color: string;
	value: PriorityEnum;
}
