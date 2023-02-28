import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  //nombre: string = 'Susana';
  nombre: string = 'Alberto';
  // genero: string = 'femenino';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  //clientes: string[] = [];
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando',
  }
  //Este pipe nos permite indicar deforma dinamica la informacion que se va a mostrar en 
  //pantalla, para ello se definen casos especificos y un caso general a traves de la propiedad
  //other, en nuestro ejemplo se hace uso de # para recuperar el numero y mostrarlo en pantalla.

  cambiarCliente(){
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6

  //En la promesa al pasar 3500 milosegundos la promesa se resuelve y es cuando se muestra en
  //pantalla con el pipe
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  } );

}
