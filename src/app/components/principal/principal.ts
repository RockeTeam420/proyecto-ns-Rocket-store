import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { ApiService } from '../principal/service/api.service'

@Component({
  selector: 'principal',
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']

})
export class PrincipalComponent implements OnInit {
  productos = [];
  public constructor(private router: Router, private apiService: ApiService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit() {
    this.apiService.obtenerProductos().subscribe(data => {
      this.productos = data;
      console.log(data)
    })
    
  }

  public onTap(){
    this.router.navigate(["home"]);
  }
}
