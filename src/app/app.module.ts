import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyExampleComponent } from './spotify-example/spotify-example.component';
import { BasedOnComponent } from './based-on/based-on.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyExampleComponent,
    BasedOnComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
