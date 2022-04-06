import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsDetailsPageComponent } from './listings-details-page.component';

describe('ListingsDetailsPageComponent', () => {
  let component: ListingsDetailsPageComponent;
  let fixture: ComponentFixture<ListingsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
