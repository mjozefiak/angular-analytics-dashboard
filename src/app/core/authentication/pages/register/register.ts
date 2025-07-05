import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { inject } from '@angular/core';
import { RegisterFormService } from './register-form.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.html',
   styleUrls: ['./register.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class Register {
   protected readonly registerFormService = inject(RegisterFormService);

   readonly hidePassword = signal<boolean>(true);
   readonly hideConfirmPassword = signal<boolean>(true);

   get email(): AbstractControl<string | null> | null {
      return this.registerFormService.form.get('email');
   }

   get password(): AbstractControl<string | null> | null {
      return this.registerFormService.form.get('password');
   }

   get confirmPassword(): AbstractControl<string | null> | null {
      return this.registerFormService.form.get('confirmPassword');
   }

   confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (password?.value !== confirmPassword?.value) {
         return { confirmPassword: true };
      }

      return null;
   }

   togglePasswordVisibility(event: MouseEvent): void {
      this.hidePassword.update(prev => !prev);
      event.stopPropagation();
   }

   toggleConfirmPasswordVisibility(event: MouseEvent): void {
      this.hideConfirmPassword.update(prev => !prev);
      event.stopPropagation();
   }

   onSubmit(): void {
      if (this.registerFormService.form.invalid) {
         this.registerFormService.form.markAllAsTouched();
         return;
      }

      console.log(this.registerFormService.form.value);
   }
}
