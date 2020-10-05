import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorizacionCardComponent } from './categorizacion-card.component';

describe('CategorizacionCardComponent', () => {
  let component: CategorizacionCardComponent;
  let fixture: ComponentFixture<CategorizacionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorizacionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorizacionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
