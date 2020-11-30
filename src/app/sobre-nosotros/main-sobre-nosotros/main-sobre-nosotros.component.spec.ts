import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSobreNosotrosComponent } from './main-sobre-nosotros.component';

describe('MainSobreNosotrosComponent', () => {
  let component: MainSobreNosotrosComponent;
  let fixture: ComponentFixture<MainSobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSobreNosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
