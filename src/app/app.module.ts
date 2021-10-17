import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from './forms/forms.component';
import { GithubExplanationComponent } from './github-explanation/github-explanation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    GithubExplanationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
