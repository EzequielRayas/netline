import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCotComponent } from './eliminar-cot.component';

describe('EliminarCotComponent', () => {
  let component: EliminarCotComponent;
  let fixture: ComponentFixture<EliminarCotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
