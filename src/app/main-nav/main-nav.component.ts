import { Component,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {CollectionComponent} from '../collection/collection.component';
import { UploadComponent } from '../upload/upload.component';
import { NewfolderComponent } from '../newfolder/newfolder.component';
import {AppComponent} from '../app.component'
import { ChildActivationEnd } from '@angular/router';
import { GestionImputacionData } from '../gestion-impuctacion-data';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @ViewChild(CollectionComponent,{static: false}) child: CollectionComponent;

  detalle(parte: GestionImputacionData) {
   
    this.child.cargar(parte);
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    @Output() messageEvent=new EventEmitter<string>();
  constructor(private breakpointObserver: BreakpointObserver) {}
  @Input('master') masterName: string;
 
sendMessage(){
  if (this.masterName.length <= 1) {  }
			else {
				//curdirect is changed to parent folder
				this.masterName = this.masterName.substring(0, this.masterName.lastIndexOf("/"));
        this.messageEvent.emit(this.masterName)
      }
      
  
}

}
