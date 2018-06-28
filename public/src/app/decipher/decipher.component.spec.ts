import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecipherComponent } from './decipher.component';

describe('DecipherComponent', () => {
  let component: DecipherComponent;
  let fixture: ComponentFixture<DecipherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecipherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecipherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
