import { LoginComponent } from "./login.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LoginComponent, RouterOutlet ],
            providers: [ ChildrenOutletContexts]
        })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});