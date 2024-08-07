import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwedComponent } from './owed.component';

describe('OwedComponent', () => {
  let component: OwedComponent;
  let fixture: ComponentFixture<OwedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
