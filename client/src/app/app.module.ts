import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureBirdComponent } from './dashboard/feature-bird/feature-bird.component';
import { JournalPageComponent } from './journal-page/journal-page.component';
import { UserComponent } from './dashboard/user/user.component';
import { JournalComponent } from './dashboard/journal/journal.component';
import { ProfilePageComponent } from './profile-page/profile-page.component'

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "journal", component: JournalPageComponent },
  { path: "profile", component: ProfilePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FeatureBirdComponent,
    JournalPageComponent,
    UserComponent,
    JournalComponent,
    ProfilePageComponent  
       
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
