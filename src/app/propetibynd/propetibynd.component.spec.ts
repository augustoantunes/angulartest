import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetibyndComponent } from './propetibynd.component';

describe('PropetibyndComponent', () => {
  let component: PropetibyndComponent;
  let fixture: ComponentFixture<PropetibyndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropetibyndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropetibyndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
