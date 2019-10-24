import { Component } from '@angular/core';
import { Giphy } from './giphy'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  giphys: Giphy[] = [
    // {id:1, name:'A sticker is an (animated) GIF with transparent pixels'},
    // {id:2,name:'is an online database and search engine that allows users to search for and share short looping videos with no sound'},
    // {id:3,name:'why so serious?'},
    // {id:4,name:'Aspire to inspire before we expire.'},
    // {id:5,name:'Everything you can imagine is real.'},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
