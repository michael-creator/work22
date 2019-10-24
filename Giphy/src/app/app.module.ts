import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyDetailComponent } from './giphy-detail/giphy-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GiphyFormComponent } from './giphy-form/giphy-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    GiphyDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    GiphyFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
