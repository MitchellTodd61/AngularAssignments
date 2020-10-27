import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import { FilterTypePipe } from './filter-type.pipe';
import {FormsModule} from '@angular/forms';
import {HoverStyleDirective} from './hover-style.directive';

@NgModule({
  declarations: [
    AppComponent, ContentCardComponent, ContentListComponent, FilterTypePipe, HoverStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
