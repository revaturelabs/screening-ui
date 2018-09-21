import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivateLocationComponent } from './reactivatelocation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationService } from '../../../services/location.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../../services/alerts.service';


xdescribe('ReactivateLocationComponent', () => {
    let component: ReactivateLocationComponent;
    let fixture: ComponentFixture<ReactivateLocationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ReactivateLocationComponent,
            ],
            imports: [
                NgbModule.forRoot(),
                HttpClientModule
            ],
            providers: [
                LocationService,
                AlertsService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReactivateLocationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
