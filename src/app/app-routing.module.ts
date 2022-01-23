import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailsComponent } from './views/video-details/video-details.component';
import { VideoComponent } from './views/video/video.component';

const routes: Routes = [
  { path: '', component: VideoComponent },
  { path: 'details/:id', component: VideoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
