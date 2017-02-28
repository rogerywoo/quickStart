import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

//Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService  } from './core/hero.service';
import { DashboardComponent  } from './shared/dashboard/dashboard.component';
import { HeroSearchComponent  } from './heroes/hero-search/hero-search.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService),                  
                  AppRoutingModule],
                  
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent,
                  HeroSearchComponent
                  ],
                  
  providers: [ HeroService ],
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
