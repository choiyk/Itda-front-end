import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingComponent } from './pages/meeting/meeting.component';
import { MainComponent } from './pages/main/main.component';
import { JobInfoComponent } from './pages/job-info/job-info.component';
import { EventComponent } from './pages/event/event.component'; 

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
