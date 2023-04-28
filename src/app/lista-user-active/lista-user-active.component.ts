import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-lista-user-active',
  templateUrl: './lista-user-active.component.html',
  styleUrls: ['./lista-user-active.component.css']
})
export class ListaUserActiveComponent {

listaUser = User[];

constructor(private listaUser: User){
  this.listaUser = User.status;
}

}
