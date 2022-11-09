import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaMainComponent } from './pizza-main/pizza-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaMainComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
