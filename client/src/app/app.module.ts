import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureBirdComponent } from './dashboard/feature-bird/feature-bird.component';
import { JournalComponent } from './dashboard/journal/journal.component';
import { UserComponent } from './dashboard/user/user.component';

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "journal", component: JournalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FeatureBirdComponent,
    JournalComponent,
    UserComponent
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
