import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  public listContent = new ContentList();
  output: string;

  item1: Content = {
    id: 0,
    author: 'Wikipedia',
    imgUrl: 'https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png',
    type: 'A phone',
    title: 'Picture WOW!',
    body: 'This is a picture hahahahahah.',
    tags: ['A PHOTO!']
  };
  item2: Content = {
    id: 1,
    author: 'Wikipedia',
    imgUrl: 'https://en.wikipedia.org/wiki/Image#/media/File:TEIDE.JPG',
    type: 'Cooler Picture',
    title: 'Picture WOW!',
    body: 'This is a picture hahahahahah.',
    tags: ['A PHOTO!']
  };
  item3: Content = {
    id: 2,
    author: 'Wikipedia',
    imgUrl: 'https://en.wikipedia.org/wiki/Image#/media/File:Tourism_in_London795.jpg',
    type: 'More picture',
    title: 'Picture WOW!',
    body: 'This is a picture hahahahahah.',
    tags: ['A PHOTO!']
  };

  constructor() {
    this.listContent.addItem(this.item1);
    this.listContent.addItem(this.item2);
    this.listContent.addItem(this.item3);
    this.output = this.listContent.outputArray(0) + this.listContent.outputArray(1) + this.listContent.outputArray(2);
  }
  ngOnInit(): void {
  }

}
