import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower = 'alberto';
  nombreUpper = 'ALBERTO';
  nombreCompleto = 'JoRgE AlBeRtO';

  fecha: Date = new Date();
}
