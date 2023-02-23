import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProvComponent } from './eliminar-prov.component';

describe('EliminarProvComponent', () => {
  let component: EliminarProvComponent;
  let fixture: ComponentFixture<EliminarProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
