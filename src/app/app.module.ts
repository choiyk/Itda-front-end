import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { MenuComponent } from './ui/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';
import { EventComponent } from './pages/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    MenuComponent,
    MainComponent,
    JobInfoComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
