// import core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import module    
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// import component
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
// import service
import { HeroService } from './hero.service';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchService }  from './hero-search.service';
import { TestComponent } from './test/test.component';
import { FormComponent } from './form/form.component';
import { HttpInterceptorModule } from 'ng-http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    TestComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    HttpInterceptorModule
  ],
  providers: [HeroService, InMemoryDataService,HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
