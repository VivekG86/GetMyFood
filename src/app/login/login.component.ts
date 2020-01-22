import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../login/login.service'

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'GetMyFood';

  constructor(private router: Router, private service: loginService) {
  }

  username: string;
  password: string;

  ngOnInit() {
  }

  onSubmit() {
    let result = this.service.validateCredentials(this.username, this.password);
    if (result) {
      this.router.navigate(['/Home', this.username]);
    }

  }


}
