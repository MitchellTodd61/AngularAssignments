import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})



export class ContentListComponent implements OnInit {
  public contentList = new Array <Content>();
  public validity = '';
  public title = '';
  outputHTML: string;

  // // Item list below
  // item1: Content = {
  //   id: 0,
  //   author: 'Me',
  //   imgUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
  //   title: 'Item 1',
  //   type: 'Food',
  //   tags: ['Food', 'Yummy', 'French Toast'],
  //   body: 'This is our body for 1st item'
  // };
  //
  // item2: Content = {
  //   id: 1,
  //   author: 'Jimmy',
  //   imgUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   title: 'Item 2',
  //   type: 'Food',
  //   tags: ['Food', 'Image', 'Pizza'],
  //   body: 'This is our body for 2nd item'
  // };
  //
  // item3: Content = {
  //   id: 2,
  //   author: 'Another guy',
  //   imgUrl: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   title: 'Item 3',
  //   type: 'Animal',
  //   tags: ['Animal', 'Tiger', 'King of Jungle'],
  //   body: 'This is our body for 3rd item'
  // };
  //
  // item4: Content = {
  //   id: 3,
  //   author: 'Joe man',
  //   imgUrl: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
  //   title: 'Item 4',
  //   type: 'Nature',
  //   tags: ['Nature', 'Forest', 'Deep Green'],
  //   body: 'This is our body for 4th item'
  // };
  //
  // item5: Content = {
  //   id: 4,
  //   author: 'Default',
  //   imgUrl: '',
  //   title: 'Item 5',
  //   type: 'Nature',
  //   tags: ['Default', 'Image', 'Tag'],
  //   body: 'This has no img url'
  // };
  // constructor() {
  //   this.contentList.push(this.item1, this.item2, this.item3, this.item4, this.item5);
  // }
  //
  constructor(private contentService: ContentService) {
  }
  public idPrint(content: Content): void{
    console.log(content.id);
  }

  // New func for validity of title
  public validTitle(title: string): any{
    if (this.contentList.filter(t => t.title.toLowerCase().includes(title.toLowerCase())).length !== 0){
      this.validity = 'That is a valid and real title on the page!';
      console.log ('That is a valid title console log!');
    }else{
      this.validity = 'That is NOT a valid and real title on the page!';
      console.log ('That is NOT a valid title console log!');
    }
    title = '';
  }

  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(content => this.contentList = content);
  }

}

