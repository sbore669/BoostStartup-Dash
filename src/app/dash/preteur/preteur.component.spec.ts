import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreteurComponent } from './preteur.component';

describe('PreteurComponent', () => {
  let component: PreteurComponent;
  let fixture: ComponentFixture<PreteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
