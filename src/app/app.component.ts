import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// components
import { LoginComponent } from './modules/login/pages/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
  template: `
  <router-outlet />
  <app-login />
  `
})
export class AppComponent {}
