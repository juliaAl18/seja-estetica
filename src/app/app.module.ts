
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { QuizComponent } from './modules/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './modules/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelComponent,
    DuvidasComponent,
    ModalBotoxComponent,
    QuemSomosComponent,
    ComentariosComponent,
    AntesDepoisComponent,
    ExperimenteComponent,
    QuizComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
