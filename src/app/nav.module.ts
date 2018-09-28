import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';




@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
  ],
  declarations: [
    NavComponent
  ],
  providers: [CookieService],
  exports: [NavComponent]
})
export class NavModule { }
