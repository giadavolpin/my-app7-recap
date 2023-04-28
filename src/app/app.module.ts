import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentiIscrittiComponent } from './gestione/gestione-studenti/studenti-iscritti/studenti-iscritti.component';
import { StudenteInfoComponent } from './gestione/gestione-studenti/studente-info/studente-info.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ListaUserActiveComponent } from './lista-user-active/lista-user-active.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentiIscrittiComponent,
    StudenteInfoComponent,
    LoginComponent,
    ListaUserActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  //AAGIUNGERE QUESTO PER TOGLIERE IL PROBLEMA AL NGMODEL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
