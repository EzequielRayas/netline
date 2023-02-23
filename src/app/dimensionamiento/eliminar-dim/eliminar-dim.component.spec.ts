import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDimComponent } from './eliminar-dim.component';

describe('EliminarDimComponent', () => {
  let component: EliminarDimComponent;
  let fixture: ComponentFixture<EliminarDimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
