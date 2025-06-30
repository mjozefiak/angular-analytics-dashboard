import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class LoginFormService {
   readonly form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
   });

   onSubmit(): void {
      if (this.form.invalid) {
         this.form.markAllAsTouched();
         return;
      }

      console.log(this.form.value);
   }
}
