import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminofertasComponent } from './adminofertas.component';

describe('AdminofertasComponent', () => {
  let component: AdminofertasComponent;
  let fixture: ComponentFixture<AdminofertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminofertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminofertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
