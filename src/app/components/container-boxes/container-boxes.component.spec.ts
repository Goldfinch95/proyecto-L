import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBoxesComponent } from './container-boxes.component';

describe('ContainerBoxesComponent', () => {
  let component: ContainerBoxesComponent;
  let fixture: ComponentFixture<ContainerBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerBoxesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
