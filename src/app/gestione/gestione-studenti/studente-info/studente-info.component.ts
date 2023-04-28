import { Component } from '@angular/core';
import { StudentiService } from 'src/app/services/studenti.service';
import { Studente } from 'src/app/models/studente.model';

@Component({
  selector: 'app-studente-info',
  templateUrl: './studente-info.component.html',
  styleUrls: ['./studente-info.component.css']
})
export class StudenteInfoComponent {

  singoloStudente: Studente;
  matricola: number;
constructor(private studentiService: StudentiService){

}

onStampaInfo(){
  this.singoloStudente = this.studentiService.descriviStudente(this.matricola);
}


}
