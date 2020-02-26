import { Component, OnInit,Output,EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    this.curdirect=parte.foo;
    this.getlist()
  }
len1:number=0;//number of folder
len2:number=0;//number of files
curdirect:string='';//current directory
folderlist:string[]=[];//list of folders
filelist:string[]=[];//list of files


constructor(private http: HttpClient,private renderer: Renderer2,private data:  PathchangeService,private activatedRoute: ActivatedRoute) { }
//Getlist makes a get request to get names of files and folders in current directory
getlist(x=''):void {

this.folderlist=[];
this.filelist=[];
this.len1=0;
this.len2=0;

if (x.length > 0 ) {this.curdirect += '/'+x;}      

  //service to share currentdirectory within components 
  this.data.changeMessage(this.curdirect)
  
    this.http.get<any>("http://localhost:3000/crud/read/" + this.curdirect).subscribe(data => {
      this.len1 = data.directory.length;
    //push to folder
      for (var i = 0; i < this.len1; i++) {
        this.folderlist.push(data.directory[i]);
      }
      this.len2 = data.fil.length
    //push to file
      for (i = 0; i < this.len2; i++) {
        this.filelist.push(data.fil[i]);
         
      }
})
  
    }
    //download function
    download(x) {
      window.location.href = 'http://localhost:3000/crud/download/' + this.curdirect + '/' + x;
    }
    //delete function
     delete(x) {
    //  var obj = this.http.post('http://localhost:3000/crud/delete/',{ filetodelete: this.curdirect + '/' + x})obj.subscribe()window.location.replace("http://localhost:4200/")
      var deleteobject = { filetodelete: this.curdirect + '/' + x }
      $.post("http://localhost:3000/crud/delete/", deleteobject, function () {
      });
      this.getlist()
    }
    //get parameter from url
    getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
          return pair[1];
        }
      }} 

  ngOnInit() {
   
  this.getlist();
  if( this.getQueryVariable('msg')){
  alert(this.getQueryVariable('msg'))
  }
  this.data.currentMessage.subscribe(message => this.curdirect = message)
  }
 
}

  


