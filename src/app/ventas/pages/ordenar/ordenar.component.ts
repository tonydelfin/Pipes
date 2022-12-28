import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.inteface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: []
})
export class OrdenarComponent {

  ordenarPor: string = "";

  Mayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: "Spider Man",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Iron Man",
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: "Hulk",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Thor",
      vuela: true,
      color: Color.azul
    },

  ];

  cambiarOrden(valor: string){
    this.ordenarPor= valor;
  }

  enMayusculas(){
     this.Mayusculas = !this.Mayusculas;
  }

}
