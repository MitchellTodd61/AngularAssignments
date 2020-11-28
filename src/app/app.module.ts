import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ContentCardComponent} from './content-card/content-card.component';
import {ContentListComponent} from './content-list/content-list.component';
import { FilterTypePipe } from './filter-type.pipe';
import {HoverStyleDirective} from './hover-style.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
// import { CreateContentComponent } from './create-content/create-content.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { CreateComponentComponent } from './create-component/create-component.component';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  declarations: [
    // tslint:disable-next-line:max-line-length
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    FilterTypePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
    MessagesComponent,
    CreateComponentComponent // CreateContentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
