import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { MenuComponent } from './ui/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';
import { EventComponent } from './pages/event/event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventWriteComponent } from './pages/event-write/event-write.component';
import { MeetingDetailComponent } from './pages/meeting-detail/meeting-detail.component';
import { MeetingWriteComponent } from './pages/meeting-write/meeting-write.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingMenuComponent } from './pages/setting-menu/setting-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    MenuComponent,
    MainComponent,
    JobInfoComponent,
    EventComponent,
    EventDetailComponent,
    EventWriteComponent,
    MeetingDetailComponent,
    MeetingWriteComponent,
    SafeHtmlPipe,
    JoinComponent,
    LoginComponent,
    SettingMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    AngularEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
