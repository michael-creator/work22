import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Giphy } from '../giphy';

@Component({
  selector: 'app-giphy-detail',
  templateUrl: './giphy-detail.component.html',
  styleUrls: ['./giphy-detail.component.css']
})
export class GiphyDetailComponent implements OnInit {

  @Input() giphy: Giphy;
  @Output() isComplete = new EventEmitter<boolean>();

  giphyDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
