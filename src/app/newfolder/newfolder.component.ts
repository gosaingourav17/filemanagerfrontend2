import { Component, OnInit } from '@angular/core';
import {PathchangeService} from '../pathchange.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-newfolder',
  templateUrl: './newfolder.component.html',
  styleUrls: ['./newfolder.component.css']
})
export class NewfolderComponent implements OnInit {
sub:string;

AddCurdirFormUpdate() {
  console.log('inupdate')
  document.forms["newfolder"]["curdirect"].value = this.sub;
  
  return true;
}
  constructor(private data:  PathchangeService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.sub = message)
    
  }
  
}


  

