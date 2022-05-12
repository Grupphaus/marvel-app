/** Modules */
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

/** Feature Modules */
import { HomeModule } from './routes/home/home.module';
import { CharacterModule } from './routes/character/character.module';

/** Components */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HomeModule,
    CharacterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
