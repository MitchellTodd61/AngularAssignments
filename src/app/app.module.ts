import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import { FilterTypePipe } from './filter-type.pipe';
import {FormsModule} from '@angular/forms';
import {HoverStyleDirective} from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
// import { CreateContentComponent } from './create-content/create-content.component';

@NgModule({
  declarations: [
    // tslint:disable-next-line:max-line-length
    AppComponent, ContentCardComponent, ContentListComponent, FilterTypePipe, HoverStyleDirective, MessagesComponent, // CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
