import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ScreeningComponent } from './components/screening/screening.component';
import { AppComponent } from './app.component';
import { CandidatesScreeningListComponent } from './components/candidates-screening-list/candidates-screening-list.component';
// Importing the routes from app routes
import { routes } from './app.routes';
import { QuestionsTableComponent } from './components/questions-table/questions-table.component';
@NgModule({
  declarations: [
    ScreeningComponent,
    CandidatesScreeningListComponent,
    QuestionsTableComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
