import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPresentacionComponent } from './imagen-presentacion.component';

describe('ImagenPresentacionComponent', () => {
  let component: ImagenPresentacionComponent;
  let fixture: ComponentFixture<ImagenPresentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenPresentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
