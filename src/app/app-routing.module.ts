import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsAppComponent } from './components/cards-app/cards-app.component';
import { FormCardsComponent } from './components/form-cards/form-cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsAppComponent
  },
  {
    path: 'addCards',
    component: FormCardsComponent
  },
  {
    path: 'update/card/:id',
    component: FormCardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
