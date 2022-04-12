import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, myRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CrudService } from './service/crud.service';


@NgModule({
  declarations: [
    AppComponent,
    myRoutes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:  [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
