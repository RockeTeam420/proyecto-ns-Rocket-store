import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Page } from '@nativescript/core';

// Define una interfaz para el perfil del usuario
interface UserProfile {
  nombre?: string;
  email?: string;
  foto?: string;
}

@Component({
  selector: 'perfil',
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent implements OnInit {
  rol: string = '';
  nombre: string = '';
  foto: string = '';
  verperfil: UserProfile = {}; // Usa la interfaz definida
  email: string = '';

  constructor(private router: Router, private page: Page) {
    this.cargarPerfilDeUsuario();
  }

  ngOnInit(): void {
    this.page.actionBarHidden = true;
  }

  private cargarPerfilDeUsuario(): void {
    const token = localStorage.getItem('rocket.token');
    if (token) {
      try {
        this.verperfil = JSON.parse(localStorage.getItem('rocket.user') || '{}') as UserProfile;
        this.nombre = this.verperfil.nombre || '';
        this.email = this.verperfil.email || '';
        this.foto = this.verperfil.foto || '';
      } catch (error) {
        console.error('No se pudo analizar el perfil del usuario desde el almacenamiento local', error);
        this.router.navigate(['login']);
      }
    } else {
      this.router.navigate(['login']);
    }
  }

  public onTap(): void {
    this.router.navigate(['home']);
    console.log(localStorage.getItem('rocket.user'));
  }

  public verPerfil(): void {
    this.router.navigate(['perfil']);
  }

  public productos(): void {
    this.router.navigate(['productos']);
  }

  public cerrar(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
