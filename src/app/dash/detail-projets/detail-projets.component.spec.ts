import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjetsComponent } from './detail-projets.component';

describe('DetailProjetsComponent', () => {
  let component: DetailProjetsComponent;
  let fixture: ComponentFixture<DetailProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
