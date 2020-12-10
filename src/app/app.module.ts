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
import {InMemoryDataService} from './in-memory-data.service';
import {CreateComponentComponent, CreateStartComponentComponent} from './create-component/create-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ContentDetailComponent } from './content-detail/content-detail.component';


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
    CreateComponentComponent,
    CreateStartComponentComponent,
    ContentDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
