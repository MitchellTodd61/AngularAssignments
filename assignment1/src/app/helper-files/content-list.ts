import {Content} from './content-interface';
import { Component } from '@angular/core';

export class ContentList{
  /*random error*/
  // tslint:disable-next-line:variable-name
  private _items: Content[];


  constructor() {
    this._items = [];
  }


  get items(): Content[] {
    return this._items;
  }

  addItem(item: Content): void{
    this._items.push(item);
  }

  ammountArray(): number{
    return this._items.length;

  }

  outputArray(id: number): string {
    /* */
    return '<h1>' + this._items[id].title + '</h1>' +
      '<h2> Author: ' + this._items[id].author + '</h2>' +
      '<h2> Type: ' + this._items[id].type + '</h2>' +
      '<h2> Tags: ' + this._items[id].tags + '</h2>' +
      '<p>' + this._items[id].body + '</p>' +
      '<img src="' + this._items[id].imgUrl + '" alt="picture" width="250" height="250">';
  }
}
