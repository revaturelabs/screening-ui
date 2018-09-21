import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dependencies } from '../../../caliber.test.module';
import { EditlocationComponent } from './editlocation.component';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentFactoryResolver, Injector } from '@angular/core';
import { NgbModalStack } from '@ng-bootstrap/ng-bootstrap/modal/modal-stack';
import { Location } from '../../../entities/Location';

describe('EditlocationComponent', () => {
  let component: EditlocationComponent;
  let fixture: ComponentFixture<EditlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set state', () => {
    component.stateChange('Oregon');
    expect(component.newState).toEqual('Oregon');
  });

  it('should call getDismissReason if', () => {
    expect(component['getDismissReason'](ModalDismissReasons.ESC)).toBeTruthy();
  });

  it('should call getDismissReason else if', () => {
    expect(component['getDismissReason'](ModalDismissReasons.BACKDROP_CLICK)).toBeTruthy();
  });

  it('should call getDismissReason else', () => {
    expect(component['getDismissReason']('yes')).toBeTruthy();
  });

});
