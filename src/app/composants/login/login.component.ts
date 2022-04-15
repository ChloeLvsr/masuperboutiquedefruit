import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "chloe";
  password = "1234";
  message = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    if (loginForm.value.username == this.username && loginForm.value.password == this.password) {
      this.router.navigate(["product"]);
    }
      else {
        this.message = true;
      }
    
  }
}
