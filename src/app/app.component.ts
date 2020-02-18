import { Component } from '@angular/core';
import {PathchangeService} from './pathchange.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data: PathchangeService) { }
  title = 'fileexplorer';
  master:string='abcd';

  ngOnInit() {
  
    this.data.currentMessage.subscribe(message => this.master = message)
  }
  recieveMessage($event){
    this.master=$event
  }
}
