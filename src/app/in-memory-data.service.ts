import { Injectable } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  // @ts-ignore
  //
  // tslint:disable-next-line:typedef
  createDb(){
  const content: Content[] = [{
    id: 0,
    author: 'Me',
    imgUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    title: 'Item 1',
    type: 'Food',
    tags: ['Food', 'Yummy', 'French Toast'],
    body: 'This is our body for 1st item'
  }, {
    id: 1,
    author: 'Jimmy',
    imgUrl: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Item 2',
    type: 'Food',
    tags: ['Food', 'Image', 'Pizza'],
    body: 'This is our body for 2nd item'
  }, {
    id: 2,
    author: 'Another guy',
    imgUrl: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Item 3',
    type: 'Animal',
    tags: ['Animal', 'Tiger', 'King of Jungle'],
    body: 'This is our body for 3rd item'
  }, {
    id: 3,
    author: 'Joe man',
    imgUrl: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
    title: 'Item 4',
    type: 'Nature',
    tags: ['Nature', 'Forest', 'Deep Green'],
    body: 'This is our body for 4th item'
  }, {
    id: 4,
    author: 'Default',
    imgUrl: '',
    title: 'Item 5',
    type: 'Nature',
    tags: ['Default', 'Image', 'Tag'],
    body: 'This has no img url'
  }];
  return {content};
  }
  getId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(contents => contents.id)) + 1
      : 2000;
  }
}
