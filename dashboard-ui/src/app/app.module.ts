import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LiveComponent } from './live/live.component';
import { PastComponent } from './past/past.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CampaignColComponent } from './campaign-col/campaign-col.component';
import { ActionColComponent } from './action-col/action-col.component';
import { UpcomingPipe } from './upcoming/upcoming.pipe';
import { LivePipe } from './live/live.pipe';
import { PastPipe } from './past/past.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    UpcomingComponent,
    LiveComponent,
    PastComponent,
    CampaignColComponent,
    ActionColComponent,
    UpcomingPipe,
    LivePipe,
    PastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
