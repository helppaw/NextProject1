import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DunnoComponent } from './dunno.component';

describe('DunnoComponent', () => {
  let component: DunnoComponent;
  let fixture: ComponentFixture<DunnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DunnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DunnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
