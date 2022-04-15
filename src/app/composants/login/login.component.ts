import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "chloe";
  password = "1234";
  message = false;


  constructor(private router: Router, private ps: ProduitsService) { }

  ngOnInit(): void {
  }

  login(loginForm: any) {
    if (loginForm.value.username == this.username && loginForm.value.password == this.password) {
      this.router.navigate(["product"]);
      this.ps.isAuthotified = true;
    }
      else {
        this.message = true;
      }
    
  }
}
