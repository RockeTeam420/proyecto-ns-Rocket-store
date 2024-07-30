import { LoginComponent } from "./components/login/login";
import { RegistroComponent } from "./components/registro/registro";
import { HomeComponent } from "./components/home/home";
import { TiendaComponent } from "./components/tienda/tienda";
import { PerfilComponent } from "./components/perfil/perfil";
import { CarritoComponent } from "./components/carrito/carrito";
import { CatalogoComponent } from "./components/catalogo/catalogo";
import { GestionComponent } from "./components/gestion/gestion";
import { ProductosComponent } from "./components/productos/productos";
import { ProductoVerComponent } from "./components/productoVer/productoVer";
import { PrincipalComponent } from "./components/principal/principal";
import { PruebaComponent } from "./components/prueba/prueba";

export const appRoutes: any = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "home", component: HomeComponent },
  { path: "tienda", component: TiendaComponent },
  { path: "catalogo", component: CatalogoComponent },
  { path: "gestion", component: GestionComponent },
  { path: "perfil", component: PerfilComponent },
  { path: "carrito", component: CarritoComponent },
  { path: "productos", component: ProductosComponent },
  { path: "productoVer", component: ProductoVerComponent },
  { path: "principal", component: PrincipalComponent},
  { path: "prueba", component: PruebaComponent},
];

export const appComponents: any = [
  LoginComponent,
  RegistroComponent,
  HomeComponent,
  TiendaComponent,
  PerfilComponent,
  CarritoComponent,
  CatalogoComponent,
  GestionComponent,
  ProductosComponent, 
  ProductoVerComponent,
  PrincipalComponent,
  PruebaComponent,
];
