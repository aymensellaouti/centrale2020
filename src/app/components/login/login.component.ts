import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response.id);
        this.errorMessage = '';
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.error.message;
      }
    );
  }
}
