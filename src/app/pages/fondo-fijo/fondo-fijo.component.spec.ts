import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoFijoComponent } from './fondo-fijo.component';

describe('FondoFijoComponent', () => {
  let component: FondoFijoComponent;
  let fixture: ComponentFixture<FondoFijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoFijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
