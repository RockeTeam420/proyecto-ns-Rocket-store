import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { Page, TextField, Dialogs } from '@nativescript/core';
import { openUrl } from '@nativescript/core/utils';

@Component({
  selector: 'registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class RegistroComponent implements OnInit {
  isAcceptTermin: boolean = false;
  showPasswordIcon: boolean = true;
  showConfirmPasswordIcon: boolean = true;
  passwordField: TextField;
  confirmPasswordField: TextField;
  nombre = '';
  correo = '';
  password = '';
  confirmPassword = '';
  termsAccepted: boolean = false;
  emailValid: boolean = true;

  constructor(private router: Router, private page: Page, private apiService: ApiService) {}

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  onSwitchChange(args) {
    this.isAcceptTermin = args.value;
    console.log('Switch value:', this.isAcceptTermin);
  }

  public onLogin(): void {
    this.router.navigate(["login"]);
  }

  validateEmail(campo: string): void {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailValid = emailRegex.test(campo);
  }

  inputChange(args, campo: string) {
    const textField = <TextField>args.object;
    const value = textField.text;
    this[campo] = value;

    if (campo === 'correo') {
      this.validateEmail(value);
    }
  }

  registrarse() {
    if (!this.isAcceptTermin) {
      Dialogs.alert({
        title: 'Info',
        message: 'Tienes que aceptar los Términos y Condiciones.',
        okButtonText: 'OK',
        cancelable: true
      }).then(() => {
        this.router.navigate(['registro']);
      });
      return;
    }

    if (!this.nombre || !this.correo || !this.password || !this.confirmPassword) {
      Dialogs.alert({
        title: 'Error',
        message: 'Todos los campos son obligatorios.',
        okButtonText: 'OK',
        cancelable: true
      });
      return;
    }

    if (!this.emailValid) {
      Dialogs.alert({
        title: 'Error',
        message: 'El correo electrónico no es válido.',
        okButtonText: 'OK',
        cancelable: true
      });
      return;
    }

    if (this.password !== this.confirmPassword) {
      Dialogs.alert({
        title: 'Error',
        message: 'Las contraseñas no coinciden.',
        okButtonText: 'OK',
        cancelable: true
      });
      return;
    }

    const data = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
      confirmPassword: this.confirmPassword
    };

    this.apiService.registrarse(data).subscribe(
      (res) => {
        Dialogs.alert({
          title: 'Info',
          message: res.message,
          okButtonText: 'OK',
          cancelable: true
        }).then(() => {
          if (res.respuesta < 204) {
            this.router.navigate(['login']);
          }
        });
      },
      (error) => {
        Dialogs.alert({
          title: 'Error',
          message: error.error.message || 'Error desconocido.',
          okButtonText: 'OK',
          cancelable: true
        });
      }
    );
  }

  onTermsAcceptedChange(args): void {
    this.termsAccepted = args.object.checked;
    console.log('El valor de termsAccepted ha cambiado:', this.termsAccepted);
  }

  public navigateToTerms(): void {
    openUrl('http://davilarocketeam.pythonanywhere.com/term_y_cond/');
  }

  public togglePasswordVisibility(field: string): void {
    if (field === 'password') {
      this.showPasswordIcon = !this.showPasswordIcon;
      this.passwordField.secure = !this.passwordField.secure;
    } else if (field === 'confirmPassword') {
      this.showConfirmPasswordIcon = !this.showConfirmPasswordIcon;
      this.confirmPasswordField.secure = !this.confirmPasswordField.secure;
    }
  }

  textFieldLoaded(args, field: string): void {
    if (field === 'password') {
      this.passwordField = <TextField>args.object;
    } else if (field === 'confirmPassword') {
      this.confirmPasswordField = <TextField>args.object;
    }
  }

  abrirTyC(): void {
    openUrl('http://davilarocketeam.pythonanywhere.com/term_y_cond/');
  }

  public onTap(): void {
    this.router.navigate(['home']);
  }
}
