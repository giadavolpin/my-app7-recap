import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InactiveService {

  constructor() {
    listaUtentiDisattivi: User[] = [
      new User("Luca", "Inactive"),
      new User("Gino", "Inactive")
    ]
   }
}
