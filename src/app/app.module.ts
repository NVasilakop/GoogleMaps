import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { GeomapComponent } from './geomap/geomap.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    GeomapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDnjISdA_PRe8hdooYyiAL6UJ7iHOsIXT8',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
