import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { 
    path: "settings", 
    component: SettingsComponent, 
    children: [
      { path: '', redirectTo: 'profile', pathMatch: "full" },
      {path:"profile",component:AddressCardComponent},
      {path:"aboutme",component:AboutMeComponent}
    ] },
  { path: "**", component: PageNotFoundComponent },
]

@NgModule({
  declarations: [

  ],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
