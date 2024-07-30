import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Dialogs, Page, TextField } from '@nativescript/core';
import { ApiService } from './api.service';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent implements OnInit {
  nombre: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  passwordField: TextField;
  get: string

  constructor(private router: Router, private page: Page, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
    if(localStorage.getItem('rocket.token')) {
      this.router.navigate(['home']);
    }
  }

  onTap(): void {
    this.router.navigate(["home"]);
  }

  onRegister(): void {
    this.router.navigate(["registro"]);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.passwordField.secure = !this.passwordVisible;
  }

  textFieldLoaded(args): void {
    this.passwordField = args.object;
  }

  inputChange(args, campo): void {
    let textField = <TextField>args.object;
    if(campo === 'nombre') {
      this.nombre = textField.text;
    } else if (campo === 'password') {
      this.password = textField.text;
    }
  }

  loguear(): void {
    let data = {
      username: this.nombre,
      password: this.password
    };

    this.ApiService.login(data).subscribe((res) => {
      if(res && res.token.length > 0) {
        localStorage.setItem('rocket.token', res.token);
        localStorage.setItem('rocket.user', JSON.stringify(res.user));

        Dialogs.alert({
          title: 'Info!',
          message: 'Bienvenido!!',
          okButtonText: 'OK',
          cancelable: true
        });
        this.router.navigate(['home']);
      }
    }, error => {
      if(error.status === 400) {
        Dialogs.alert({
          title: 'Alerta',
          message: 'Usuario o contraseña incorrectos',
          okButtonText: 'OK',
          cancelable: true
        });
      } else {
        Dialogs.alert({
          title: 'Respuesta',
          message: error.error.message,
          okButtonText: 'OK',
          cancelable: true
        });
      }
    });
  }
}


