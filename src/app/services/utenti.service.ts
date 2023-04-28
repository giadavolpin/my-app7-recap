import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {


    listaUtentiAttivi: User[] = [
     {
      nome: "pippo",
      status: "Active"
     },
     {
      nome: "mario",
      status: "Active"
     }

    ];
    listaUtentiInattivi: User[] = [
      {
        nome: "anna",
        status: "Inactive"
      },
      {
        nome: "paola",
        status: "Inactive"
      }
    ];



   //questo metodo assegna un utente in base alla selezione dello status quando compilo il form
loggaUtente(user: User){

}

setActive(id: number){

}
setInactive(id:number){

}

constructor() {}
}
