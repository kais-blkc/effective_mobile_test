import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserInterface } from '../../../../share/user.interface';

const usersPlaceholder: UserInterface[] = [
	{ id: 1, name: 'Alex', email: 'alex@mail.com' },
	{ id: 2, name: 'John', email: 'john@mail.com' },
	{ id: 3, name: 'Marsel', email: 'marsel@mail.com' },
];

@Component({
	selector: 'app-executor',
	standalone: true,
	imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
	templateUrl: './executor.component.html',
	styleUrl: './executor.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutorComponent {
	@Input() value: UserInterface[] | undefined;
	@Output() selected: EventEmitter<UserInterface[]> = new EventEmitter<UserInterface[]>();
	public users: UserInterface[] = usersPlaceholder;
}
