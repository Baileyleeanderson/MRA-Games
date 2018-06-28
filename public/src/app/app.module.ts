import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { HttpService } from './http.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LeveloneComponent } from './levelone/levelone.component';
import { HomeComponent } from './home/home.component';
import { DecipherComponent } from './decipher/decipher.component';
import { MemoryComponent } from './memory/memory.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LeveloneComponent,
    HomeComponent,
    DecipherComponent,
    MemoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
