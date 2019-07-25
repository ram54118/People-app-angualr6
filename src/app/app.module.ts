import { LoaderService } from './services/loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ContentComponent } from './components/shared/content/content.component';
import { SearchComponent } from './components/shared/search/search.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { LoaderInterceptorService } from './services/intercepter.service';
import { PlanetComponent } from './components/planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HeaderComponent,
    ContentComponent,
    SearchComponent,
    PlanetComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoaderService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
