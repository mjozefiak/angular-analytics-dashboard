import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {}
