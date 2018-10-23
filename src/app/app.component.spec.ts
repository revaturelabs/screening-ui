import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CookieService } from 'ngx-cookie-service';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        CookieService
      ]
    }).compileComponents()
    .then(()=> {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        h1 = fixture.nativeElement.querySelectorAll('router-outlet','app-nav');
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
  
  // This test is only applicable to components with
  // "Welcome to {{title}}" in an h1 tag
  // which is how Angular generates components before
  // any changes are made, which is what the tutorial
  // this test was taken from was testing.
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   console.log(compiled);
  //   expect(compiled.querySelectorAll('h1').textContent).toContain('Welcome to screening-ui-gen!');
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to screening-ui-gen!');
  // }));
});
