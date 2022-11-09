import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';

const routes: Routes = [
  { path: 'pizza', component: PizzaMainComponent },
  { path: '', redirectTo: '/pizza', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
