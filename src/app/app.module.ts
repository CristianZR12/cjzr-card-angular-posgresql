import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardServiceService } from './services/card-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsAppComponent } from './components/cards-app/cards-app.component';
import { FormCardsComponent } from './components/form-cards/form-cards.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardsAppComponent,
    FormCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
