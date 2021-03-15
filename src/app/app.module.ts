import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { JokeListComponent } from './joke-list/joke-list.component';
import { HelloComponent } from './hello.component';
import { JokeComponent } from './joke/joke.component';
import { AppComponent } from './app.component';
import {CSRFComponent} from './csrf/csrf.component';
import {RouterModule, Routes} from '@angular/router';
import { ANTICSRFComponent } from './anticsrf/anticsrf.component';
import { DataService } from './data.service';  

const appRoutes: Routes = [
  {path: 'havefun', component: CSRFComponent},
   {path: 'nofun', component: ANTICSRFComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule],
  declarations: [ AppComponent,JokeListComponent, HelloComponent, JokeComponent,CSRFComponent, ANTICSRFComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
