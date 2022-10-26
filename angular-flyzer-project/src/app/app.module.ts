import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscDisplayComponent } from './disc-display/disc-display.component';
import { DiscInfoComponent } from './disc-info/disc-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscDisplayComponent,
    DiscInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
