import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class LoginComponent {
   loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
   });

   readonly hidePassword = signal<boolean>(true);

   get email(): AbstractControl<string | null, string | null> | null {
      return this.loginForm.get('email');
   }

   get password(): AbstractControl<string | null, string | null> | null {
      return this.loginForm.get('password');
   }

   togglePasswordVisibility(event: MouseEvent): void {
      this.hidePassword.update(prev => !prev);
      event.stopPropagation();
   }

   onSubmit(): void {
      if (this.loginForm.invalid) {
         this.loginForm.markAllAsTouched();
         return;
      }

      console.log(this.loginForm.value);
   }
}
