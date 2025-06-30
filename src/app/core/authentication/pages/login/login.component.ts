import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LoginFormService } from './login-form.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [LoginFormService],
   imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class LoginComponent {
   readonly loginFormService = inject(LoginFormService);

   readonly hidePassword = signal<boolean>(true);

   get email(): AbstractControl<string | null, string | null> | null {
      return this.loginFormService.form.get('email');
   }

   get password(): AbstractControl<string | null, string | null> | null {
      return this.loginFormService.form.get('password');
   }

   togglePasswordVisibility(event: MouseEvent): void {
      this.hidePassword.update(prev => !prev);
      event.stopPropagation();
   }
}
