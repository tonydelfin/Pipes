import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent {

  // aplicacipn del i18nSelect
  nombre: string = "Gabriela";
  genero: string = "femenino";

  invitacionMap= {
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }
  cambiarClente(){
    this.nombre = "Jorge",
    this.genero = "masculino"
  }

  // aplicacion de i18nPlural
  clientes: string[] = ["Juan", " Victor", " Pedro", " Kiara"];
  clientesMap = {
    "=0": "no tenemos ningun cliente esperando",
    "=1": "tenemos 1 cliente esperando",
    "=2": "tenemos 2 clientes esperando",
    "=3": "tenemos 3 clientes esperando",
    "=4": "tenemos 4 clientes esperando",
    "other": "tenemos # clientes esperando"
    
  }
  borrarCliente(){
    this.clientes.shift();
    
  }


  // keyvalue pipe
  persona ={
    nombre: "Jorge Antonio",
    edad: 21,
    direccion: "Río Grande"
  }

  heroe ={
    nombre: "Spider Man",
    poder: "Fuerza",
    Ubicacion: "NY"
  }

  pelicula ={
    nombre: "Avatar 2",
    Director: "James Cameron",
    fecha: "16 de diciembre de 2022"
  }

  // async pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Se cumplio la promesa ");      
    }, 3500);
  });

 
  
  

}
