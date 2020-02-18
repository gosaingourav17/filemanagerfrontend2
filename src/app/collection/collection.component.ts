import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FileComponent} from '../file/file.component';
import {  Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PathchangeService } from "../pathchange.service";
import { GestionImputacionData } from '../gestion-impuctacion-data'
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


  constructor(private http: HttpClient,private renderer: Renderer2,private data:  PathchangeService) { }
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
         // var iDiv = document.createElement('div');
    
         // iDiv.innerHTML = `<div style=" background-color: rgba(255, 255, 255, 0.8);
          //border: 1px solid rgba(0, 0, 0, 0.8);
          //padding: 20px;
          //font-size: 30px;
          //text-align: center;" ><div ><img style="width:100px" src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/folder-icon.png"><br>`+
            //  `<a href="#" (click)="getlist()">`
              //+ data.directory[i] + `</a>` +
              //` <button onclick="delet('` + data.directory[i] + `')">Delete</button></div></div>`
    
          //document.getElementById("cardsdiv").appendChild(iDiv);
         
      }
      this.len2 = data.fil.length

      
      for (i = 0; i < this.len2; i++) {
        this.filelist.push(data.fil[i]);
          //var iDiv = document.createElement('div');
    
          //iDiv.innerHTML = `<div style=" background-color: rgba(255, 255, 255, 0.8);
          //border: 1px solid rgba(0, 0, 0, 0.8);
          //padding: 20px;
          //font-size: 30px;
          //text-align: center;"><div ><img style="width:100px" src="https://img.icons8.com/cotton/2x/file.png"><br>`
            //  + data.fil[i] + ` <button onclick="delet('` + data.fil[i] + `')">Delete</button>
      //<button onclick="download('` + data.fil[i] + `')">Download</button></div></div>`
        //  document.getElementById("cardsdiv").appendChild(iDiv);
      }
})
  
    }
    download(x) {
      window.location.href = 'http://localhost:3000/crud/download' + this.curdirect + '/' + x;
    }
     delete(x) {
       console.log('here1')
       this.http.post('http://localhost:3000/crud/delete/',{ filetodelete: this.curdirect + '/' + x}).subscribe(
        (data: any[]) => {
            console.log(data);
        }
      )
     
      
     this.getlist('')
       

     }


  ngOnInit() {
  this.getlist();
  this.data.currentMessage.subscribe(message => this.curdirect = message)
  }
 
}

  


