import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  //La inyeccion e inicializacion de este servicio permite mostrar animaciones
  //de tipo ondas en los clic en los elementos.
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  nombre: string = 'aLbeRto loPez';
  valor: number = 1000;
  obj = {
    nombre : 'Alberto',
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
}
