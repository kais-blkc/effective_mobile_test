import { ChangeDetectionStrategy, Component, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-delete-btn',
	standalone: true,
	imports: [MatIconModule],
	templateUrl: './delete-btn.component.html',
	styleUrl: './delete-btn.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteBtnComponent {}
