import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PathchangeService} from '../pathchange.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  sub: string;
  constructor(private route: ActivatedRoute,private data:  PathchangeService) { }
  AddCurdirUpload() {

    document.forms["fileupload"]["curdirect"].value = this.sub;
    alert(this.sub)
    return true;
}
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.sub = message)
  }

}
