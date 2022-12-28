import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent {

  nombreLower: string = "jorge antonio";
  nommbreUpper: string ="JORGE ANTONIO";
  nombreCompleto: string=  "JorGe aNtoNio DelFin";

  fecha: Date = new Date();
  

}
