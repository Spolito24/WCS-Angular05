import { Component } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  user: User = new User('', '', '');

  constructor() {}

  onSubmit(): void {
    alert(this.user);
  }
}
