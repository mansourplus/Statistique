import { HttpService } from './core/services/http.service';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCardComponent } from './pages/common/category-card/category-card.component';
import { MaterialModule } from './core/modules/mateiral/mateiral.module';
import { StatistiquesModule } from './pages/statistiques/statistiques.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './pages/common/header/header.component';
import { NavBarComponent } from './pages/common/nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { OrderByPipe } from './core/modules/order-by-pipe';
@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    CategoryCardComponent,
    HeaderComponent,
    NavBarComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    //StatistiquesModule,
    ReactiveFormsModule ,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
