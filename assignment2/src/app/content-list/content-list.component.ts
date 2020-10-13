import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  public contentList = new Array <Content>();
  outputHTML: string;
  //////
  item1: Content = {
    id: 0,
    author: 'Me',
    imgUrl: 'https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'Item 1',
    type: 'Animal',
    body: 'one'
  };

  item2: Content = {
    id: 1,
    author: 'Jimmy',
    imgUrl: 'https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'Item 2',
    type: 'Animal',
    body: 'two'
  };

  item3: Content = {
    id: 2,
    author: 'Another guy',
    imgUrl: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Item 3',
    type: 'Animal',
    body: 'three'
  };

  item4: Content = {
    id: 3,
    author: 'Joe man',
    imgUrl: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    title: 'Item 4',
    type: 'Nature',
    body: 'four'
  };

  item5: Content = {
    id: 4,
    author: 'Charles',
    imgUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'Item 5',
    type: 'Nature',
    body: 'five'
  };
  constructor() {
    this.contentList.push(this.item1, this.item2, this.item3, this.item4, this.item5);
  }
  public idPrint(content: Content): void{
    console.log(content.id);
  }
  ngOnInit(): void {
  }

}
