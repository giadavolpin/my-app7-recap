import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ActiveService {

  constructor() {
    listaUtentiAttivi: User[] = [
      new User("Giada", "Active"),
      new User("Paolo", "Active")

    ]
   }
}
