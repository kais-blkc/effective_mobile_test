import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DeleteBtnComponent } from '../delete-btn/delete-btn.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
	selector: 'app-deadline',
	standalone: true,
	imports: [
		FormsModule,
		MatIconModule,
		MatButtonModule,
		DeleteBtnComponent,
		MatFormFieldModule,
		MatInputModule,
		MatDatepickerModule,
		MatCalendar,
	],
	templateUrl: './deadline.component.html',
	styleUrl: './deadline.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
})
export class DeadlineComponent {
	@Input() value: string | undefined;
	@Output() selected: EventEmitter<string> = new EventEmitter<string>();
	public date: string;

	onResetDate() {
		this.value = '';
		this.selected.emit(this.value);
	}
}
