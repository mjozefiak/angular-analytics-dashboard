import { EventEmitter, Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Injectable()
export class RegisterFormService {
   readonly formSubmitted = new EventEmitter<{ email: string; password: string; confirmPassword: string }>();

   readonly form = new FormGroup(
      {
         email: new FormControl('', [Validators.required, Validators.email]),
         password: new FormControl('', [Validators.required]),
         confirmPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.confirmPasswordValidator }
   );

   onSubmit(): void {
      if (this.form.invalid) {
         this.form.markAllAsTouched();
         return;
      }

      const formValue = this.form.value;
      if (formValue.email && formValue.password && formValue.confirmPassword) {
         this.formSubmitted.emit({
            email: formValue.email,
            password: formValue.password,
            confirmPassword: formValue.confirmPassword,
         });
      }
   }

   private confirmPasswordValidator(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');
      return password && confirmPassword && password.value !== confirmPassword.value ? { confirmPassword: true } : null;
   }
}
