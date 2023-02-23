import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProdComponent } from './eliminar-prod.component';

describe('EliminarProdComponent', () => {
  let component: EliminarProdComponent;
  let fixture: ComponentFixture<EliminarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
