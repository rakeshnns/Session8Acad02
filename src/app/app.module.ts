import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FamilyMember } from './app.service'; /* Importing service */

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [FamilyMember],  /*Addedservice in NgMOdules provider now it will accesable
                                in All components declared in declaration*/
  bootstrap: [AppComponent]
})
export class AppModule { }
