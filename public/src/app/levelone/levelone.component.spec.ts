import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveloneComponent } from './levelone.component';

describe('LeveloneComponent', () => {
  let component: LeveloneComponent;
  let fixture: ComponentFixture<LeveloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
