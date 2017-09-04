import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import 'hammerjs';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {MdButtonModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdToolbarModule,
    ExpansionPanelsModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
