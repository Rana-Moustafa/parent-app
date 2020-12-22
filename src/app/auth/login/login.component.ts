import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { AuthRequestData } from '../../models/AuthRequestData';
import { AuthResponseData } from '../../models/AuthResponseData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMsg: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  userLogin(form: NgForm) {

    const userData = {
      email: form.value.username,
      password: form.value.password
    };

    this.authService.userLogin(userData as AuthRequestData).subscribe((user: AuthResponseData) => {
      localStorage.setItem('USER_TOKEN', user.token);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.errorMsg = error;
    });
  }

}
