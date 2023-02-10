import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestissementsComponent } from './investissements.component';

describe('InvestissementsComponent', () => {
  let component: InvestissementsComponent;
  let fixture: ComponentFixture<InvestissementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestissementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestissementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
