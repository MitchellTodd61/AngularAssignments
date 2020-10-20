import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({name: 'filterType'})
export class FilterTypePipe implements PipeTransform{
  transform(contentList: Content[], type: string): any{
    return contentList.filter(t => t.type.includes(type));
  }
}

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})



export class ContentListComponent implements OnInit {
  public contentList = new Array <Content>();
  public validity = '';

  outputHTML: string;

  // Item list below
  item1: Content = {
    id: 0,
    author: 'Me',
    imgUrl: 'https://images.unsplash.com/photo-1539418561314-565804e349c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'Item 1',
    type: 'Drink',
    body: 'one'
  };

  item2: Content = {
    id: 1,
    author: 'Jimmy',
    imgUrl: 'https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    title: 'Item 2',
    type: 'Food',
    body: 'two'
  };

  item3: Content = {
    id: 2,
    author: 'Another guy',
    imgUrl: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Item 3',
    type: 'Food',
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

  // New func for validity of title
  public validTitle(title: string): any{
    if (this.contentList.filter(t => t.title.toLowerCase().includes(this.title.toLowerCase())).length !== 0){
      this.validity = 'That is a valid and real title on the page!';
      console.log ('That is a valid title console log!');
    }else{
      this.validity = 'That is NOT a valid and real title on the page!';
      console.log ('That is NOT a valid title console log!');
    }
    this.title = '';
  }

  ngOnInit(): void {
  }

}

