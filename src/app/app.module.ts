import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { WorkComponent } from './work/work.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { UpdatesComponent } from './updates/updates.component';
import { LastyearComponent } from './lastyear/lastyear.component';
import { BecomesponsorComponent } from './becomesponsor/becomesponsor.component';
import { MeetsponsorsComponent } from './meetsponsors/meetsponsors.component';
import { GolfdinnerComponent } from './golfdinner/golfdinner.component';
import { DinneronlyComponent } from './dinneronly/dinneronly.component';
import { DonateComponent } from './donate/donate.component';
import { MenuComponent } from './menu/menu.component';
  import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule } from "@angular/common/http";  


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    SponsorsComponent,
    WorkComponent,
    AboutusComponent,
    MapComponent,
    ContactComponent,
    EventsComponent,
    UpdatesComponent,
    LastyearComponent,
    BecomesponsorComponent,
    MeetsponsorsComponent,
    GolfdinnerComponent,
    DinneronlyComponent,
    DonateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
