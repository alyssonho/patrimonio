import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from 'src/app/item.service';
import { FooterComponent } from './footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent,
    FooterComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    HttpClientModule,
    AccordionModule,  
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
