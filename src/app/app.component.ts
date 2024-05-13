import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, RouterLink, MatSidenavModule, MatButtonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'effective_mobile_test';
}
