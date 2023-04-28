import { Injectable } from '@angular/core';
import { Studente } from '../models/studente.model';

@Injectable({
  providedIn: 'root'
})
export class StudentiService {
/* 2 COSA CREIAMO IL NS ARRAY DI STUDENTI  */
  mieiStudenti: Studente[] = [
    new Studente(1, "laura", "bianchi", [ "ang1", "java0", "htCs3"]),
    new Studente(2, "paolo", "verdi", [ "ang1", "java0", "htCs3"]),
    new Studente(3, "maria", "gialli", [ "ang2", "js0", "htCs3"]),
    new Studente(4, "marco", "marchi", [ "ang1", "java0", "htCs3"]),
    new Studente(5, "luisa", "rossi", [ "ang1", "java0", "htCs3"]),
  ];

  constructor() { }

  descriviStudente(matricola: number): Studente{  //gli stiamo specificando il tipo di ritorno cioè Studente x essere più chiari.
    let indice = matricola -1;
    let mioStudente = this.mieiStudenti[indice];

    return mioStudente;
  }




}
