import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { UploadComponent } from './upload/upload.component';
import { NewfolderComponent } from './newfolder/newfolder.component';
import {AppComponent} from './app.component'
const routes: Routes = [ ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
