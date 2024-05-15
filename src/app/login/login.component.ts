import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  onSubmit() {

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;


    if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  }
}
