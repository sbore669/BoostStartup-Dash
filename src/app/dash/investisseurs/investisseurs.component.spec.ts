import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestisseursComponent } from './investisseurs.component';

describe('InvestisseursComponent', () => {
  let component: InvestisseursComponent;
  let fixture: ComponentFixture<InvestisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestisseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
