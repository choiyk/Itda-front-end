import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingComponent } from './pages/meeting/meeting.component';

const routes: Routes = [
  {
    path: 'meeting',
    component: MeetingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
