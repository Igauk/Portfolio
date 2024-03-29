import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {ProjectsComponent} from "./components/projects.component";
import {ContactComponent} from "./components/contact.component";
import {ResumeComponent} from "./components/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
