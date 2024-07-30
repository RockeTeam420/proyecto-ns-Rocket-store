import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 


@Component({
  selector: 'prueba',
  templateUrl:'./prueba.html',
  styleUrls: ['./prueba.css'],


})

export class PruebaComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}

