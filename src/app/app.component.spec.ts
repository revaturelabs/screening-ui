import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        RouterOutlet
      ],
      providers: [
        ChildrenOutletContexts,
        CookieService
      ]
    }).compileComponents()
    .then(()=> {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        h1 = fixture.nativeElement.querySelectorAll('router-outlet','app-nav');
    });
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'screening-ui-gen'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('screening-ui-gen');
  }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to screening-ui-gen!');
  // }));
});
