import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import {HomeService} from './home/home.service';
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
    ExpansionPanelsModule,
    HttpModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
