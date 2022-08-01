import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsToggleComponent } from './details-toggle.component';

describe('DetailsToggleComponent', () => {
  let component: DetailsToggleComponent;
  let fixture: ComponentFixture<DetailsToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
