import { Component, OnInit, ElementRef } from '@angular/core';
import { Giphy } from '../giphy'
@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {
  giphys: Giphy[] = [
    new Giphy(1,'Giphy','A sticker is an (animated) GIF with transparent pixels',new Date(2019,10,9)),
    new Giphy(1,'Giphy2','is an online database and search engine that allows users to search for and share short looping videos with no soundis an online database and search engine that allows users to search for and share short looping videos with no sound',new Date(2019,10,9)),
    new Giphy(1,'heath ledger(joker)','why so serious?',new Date(2019,10,9)),
    new Giphy(1,'Unknown person','Aspire to inspire before we expire',new Date(2019,10,9)),
    new Giphy(1,'Pablo Picasso','Everything you can imagine is real',new Date(2019,10,9)),
    
  ];
  
  addNewGiphy(giphy){
    let giphyLength = this.giphys.length;
    giphy.id = giphyLength+1;
    giphy.completeDate = new Date(giphy.completeDate)
    this.giphys.push(giphy)
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#8a9687';
 }
  toggleDetail(index){
    this.giphys[index].showDescription = !this.giphys[index].showDescription;
  }
  deleteGiphy(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.giphys[index].name}?`)

      if (toDelete){
        this.giphys.splice(index,1)
      }
    }
  }


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

}

