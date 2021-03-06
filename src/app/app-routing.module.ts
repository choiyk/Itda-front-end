import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingComponent } from './pages/meeting/meeting.component';
import { MainComponent } from './pages/main/main.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';
import { EventComponent } from './pages/event/event.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventWriteComponent } from './pages/event-write/event-write.component';
import { MeetingDetailComponent } from './pages/meeting-detail/meeting-detail.component';
import { MeetingWriteComponent } from './pages/meeting-write/meeting-write.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingMenuComponent } from './pages/setting-menu/setting-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'meeting',
    component: MeetingComponent
  },
  {
    path: 'jobInfo',
    component: JobInfoComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'event-detail',
    component: EventDetailComponent
  },
  {
    path: 'event-write',
    component: EventWriteComponent
  },
  {
    path: 'meeting-detail',
    component: MeetingDetailComponent
  },
  {
    path: 'meeting-write',
    component: MeetingWriteComponent
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'setting-menu',
    component: SettingMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
