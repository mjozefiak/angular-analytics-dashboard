import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class RegisterComponent {
   registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required, this.confirmPasswordValidator]),
   });

   readonly hidePassword = signal<boolean>(true);
   readonly hideConfirmPassword = signal<boolean>(true);

   get email(): AbstractControl<string | null, string | null> | null {
      return this.registerForm.get('email');
   }

   get password(): AbstractControl<string | null, string | null> | null {
      return this.registerForm.get('password');
   }

   get confirmPassword(): AbstractControl<string | null, string | null> | null {
      return this.registerForm.get('confirmPassword');
   }

   confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if (password?.value !== confirmPassword?.value) {
         return { confirmPassword: true };
      }
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
      if (this.registerForm.invalid) {
         this.registerForm.markAllAsTouched();
         return;
      }

      console.log(this.registerForm.value);
   }
}
