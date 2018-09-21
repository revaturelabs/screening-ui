// Testing Modules
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Modules
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';

// Imports from Caliber.test.module.ts
import { Dependencies } from '../../caliber.test.module';

// Components
import { LocationsComponent } from './locations.component';

// Services
import { LocationService } from '../../../../gambit-client/services/location/location.service';
import { HttpClient } from '@angular/common/http';
import { UrlService } from '../../../../gambit-client/services/urls/url.service';
// import { asyncData } from '../../services/questions/questions.service.spec';
import { defer } from 'rxjs/observable/defer';

import {Location} from '../../../../gambit-client/entities/location-entities/Location';

/**
 * Test for methods on the locations component.
 *
 * @author Antonio Marrero Bonilla | 1803-USF-MAR26 | Wezley Singleton
 *
 * @author Byron Hall | 1803-USF-MAR26 | Wezley Singleton
 **/

 /**
 * Setting up the testing environment for locations component.
 *
 * In order run test on this component, go to Caliber/caliber.test.module and uncomment
 * the LocationService that comes from the * gambit-client and comment the one
 * that comes from the location service right above the one that is commented out.
 * Uncomment this: import { LocationService } from '../../gambit-client/services/location/location.service';
 * Comment this: import { LocationService } from './services/location.service';
 **/

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;
  let locationService: LocationService;
  let httpClientSpyOnGet: {get: jasmine.Spy};

  const tempLocation: Location = new Location();
  tempLocation.locationId = 1;
  tempLocation.street = 'blah';
  tempLocation.city = 'blah_blah';
  tempLocation.state = 'Florida';
  tempLocation.zip = '99999';
  tempLocation.company = 'revature';
  tempLocation.active = true;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Should create a locations component.
   *
   * Function tested: None, test if the location component gets created.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Test if the component initialize by subscribing to the location service.
   *
   * Function tested: None, just testing the subscribe to location services.
   */
  it('should initialize and subscribe to location service', () => {
    httpClientSpyOnGet = jasmine.createSpyObj('http', ['get']);
    locationService = new LocationService(<any> httpClientSpyOnGet, new UrlService);
    const tempArray: Location[] = [tempLocation];
    httpClientSpyOnGet.get.and.returnValue(asyncData(tempArray));
    locationService.getAllLocations().subscribe(
      (resp) => expect(tempArray).toContain(tempLocation)
    );
  });
});
