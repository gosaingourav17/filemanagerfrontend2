import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileComponent} from '../file/file.component';
import {  Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PathchangeService } from "../pathchange.service";
import { GestionImputacionData } from '../gestion-impuctacion-data'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  parte: GestionImputacionData;
  cargar(parte: GestionImputacionData) {
    this.parte = parte;
    //more things
    console.log('cargar in child Called with : ', parte.foo);
    this.curdirect=parte.foo;
    this.getlist()
  }
len1:number=0;
len2:number=0;
curdirect:string='';
showcurdirect:string='';
folderlist:string[]=[];
filelist:string[]=[];
test:string='';

  constructor(private http: HttpClient,private renderer: Renderer2,private data:  PathchangeService,private activatedRoute: ActivatedRoute) { }
  getlist(x=''):void {
console.log(x)
this.folderlist=[];
this.filelist=[];
this.len1=0;
this.len2=0;

    if (x.length > 0) { this.curdirect += '/' + x; }
    
    
   
    this.data.changeMessage(this.curdirect)
   console.log('curdirect',this.curdirect)
  
    this.http.get<any>("http://localhost:3000/crud/read/" + this.curdirect).subscribe(data => {
      this.len1 = data.directory.length;
      for (var i = 0; i < this.len1; i++) {
        this.folderlist.push(data.directory[i]);
       
         
      }
      this.len2 = data.fil.length

      
      for (i = 0; i < this.len2; i++) {
        this.filelist.push(data.fil[i]);
         
      }
})
  
    }
    download(x) {
      window.location.href = 'http://localhost:3000/crud/download' + this.curdirect + '/' + x;
    }
    
     delete(x) {
    
      var obj = this.http.post('http://localhost:3000/crud/delete/',{ filetodelete: this.curdirect + '/' + x})
      obj.subscribe()
      window.location.replace("http://localhost:4200")
    }
    
    GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) 
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) 
            {
                return sParameterName[1];
            }
        }
    }​
  ngOnInit() {
  this.getlist(this.GetURLParameter('location'));
 console.log(this.GetURLParameter('location'))
  this.data.currentMessage.subscribe(message => this.curdirect = message)
  }
 
}

  


