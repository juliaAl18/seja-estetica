import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './modules/teste/teste.component';
import { HomeComponent } from './modules/home/home.component';
import { PainelComponent } from './modules/painel/painel.component';
import { ModalBotoxComponent } from './modules/duvidas/modal-botox/modal-botox.component';
import { DuvidasComponent } from './modules/duvidas/duvidas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', pathMatch: "full", redirectTo: 'home' },
  {path: 'painel', component: PainelComponent},
  {path: 'modal-botox', component: ModalBotoxComponent},
  {path: 'duvidas', component: DuvidasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
