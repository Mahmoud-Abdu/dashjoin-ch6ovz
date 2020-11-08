import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';

@NgModule({
  imports:      [ BrowserModule, FormsModule, JsonSchemaFormModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
