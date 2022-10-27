import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DiscDisplayComponent } from './disc-display/disc-display.component';
import { DiscInfoComponent } from './disc-info/disc-info.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { MyBagComponent } from './my-bag/my-bag.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscDisplayComponent,
    DiscInfoComponent,
    SideBarComponent,
    DashboardViewComponent,
    MyBagComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
