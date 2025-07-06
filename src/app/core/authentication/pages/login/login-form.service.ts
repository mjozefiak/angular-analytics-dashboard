import { EventEmitter, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
   readonly formSubmitted = new EventEmitter<{ email: string; password: string }>();

   readonly form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
   });

   onSubmit(): void {
      if (this.form.invalid) {
         this.form.markAllAsTouched();
         return;
      }

      const formValue = this.form.value;
      if (formValue.email && formValue.password) {
         this.formSubmitted.emit({
            email: formValue.email,
            password: formValue.password,
         });
      }
   }
}
