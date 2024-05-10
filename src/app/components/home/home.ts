import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"; 
import { exit } from "nativescript-exit";

@Component({
  selector: 'home',
  templateUrl: './home.html',
})
export class HomeComponent {
  public constructor(private router: Router) {
    // Use the component constructor to inject providers.
  }

  public onExit(): void {
    exit(); // will close application
  }
}
