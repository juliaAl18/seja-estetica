
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './modules/teste/teste.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './modules/home/home.component';
import { PainelComponent } from './modules/painel/painel.component';
import { DuvidasComponent } from './modules/duvidas/duvidas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalBotoxComponent } from './modules/duvidas/modal-botox/modal-botox.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { QuemSomosComponent } from './modules/quem-somos/quem-somos.component';
import { ComentariosComponent } from './modules/comentarios/comentarios.component';
import { AntesDepoisComponent } from './modules/antes-depois/antes-depois.component';
import { ExperimenteComponent } from './modules/experimente/experimente.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    HomeComponent,
    PainelComponent,
    DuvidasComponent,
    ModalBotoxComponent,
    QuemSomosComponent,
    ComentariosComponent,
    AntesDepoisComponent,
    ExperimenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
