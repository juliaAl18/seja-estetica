import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './modules/teste/teste.component';

const routes: Routes = [
  {path: 'teste', component: TesteComponent},
  { path: '', pathMatch: "full", redirectTo: 'teste' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
