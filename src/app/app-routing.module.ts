import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { UploadComponent } from './upload/upload.component';
import { NewfolderComponent } from './newfolder/newfolder.component';

const routes: Routes = [ 
{ path: 'upload',      component:UploadComponent },
{
  path: 'newfolder',
  component: NewfolderComponent,
  data: { title: 'Heroes List' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
