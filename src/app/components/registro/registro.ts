import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 


@Component({
  selector: 'registro',
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],


})


export class RegistroComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}

