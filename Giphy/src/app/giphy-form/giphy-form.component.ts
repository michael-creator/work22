import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Giphy } from '../giphy'


@Component({
  selector: 'app-giphy-form',
  templateUrl: './giphy-form.component.html',
  styleUrls: ['./giphy-form.component.css']
})
export class GiphyFormComponent implements OnInit {

  newGiphy = new Giphy(0,"","",new Date());
  @Output() addGiphy = new EventEmitter<Giphy>();

  submitGiphy(){
    this.addGiphy.emit(this.newGiphy);
  }

  constructor() { }

  ngOnInit() {
  }

}
