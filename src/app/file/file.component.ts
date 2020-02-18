import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PathchangeService} from '../pathchange.service';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  sub: string;
  constructor(private data:  PathchangeService) { 
   
  }
  AddCurdirRename() {

    document.forms["rename"]["curdirect"].value = this.sub;
    alert(this.sub)
    return true;
}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.sub = message)
  }

}


