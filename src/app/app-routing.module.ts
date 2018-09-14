import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetingComponent } from './pages/meeting/meeting.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'meeting',
    component: MeetingComponent
  },
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
