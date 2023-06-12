import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
{path:"", component: HomeComponent},
{path:"home", component:HomeComponent},
{path:"register", component:RegisterComponent},
{path:"sponsors", component:SponsorsComponent},
{path:"work", component:WorkComponent},
{path:"aboutus", component:AboutusComponent},
{path:"map", component:MapComponent},
{path:"contactus", component:ContactComponent},
{path:"events", component:EventsComponent},

{path:"updates", component:UpdatesComponent},

{path:"lastyear", component:LastyearComponent},

{path:"becomesponsor", component:BecomesponsorComponent},

{path:"meetsponsors", component:MeetsponsorsComponent},

{path:"golfdinner", component:GolfdinnerComponent},

{path:"dinneronly", component:DinneronlyComponent},
{path:"donate", component:DonateComponent},
{path:"menu", component:MenuComponent},




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
