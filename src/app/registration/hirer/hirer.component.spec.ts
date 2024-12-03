import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirerComponent } from './hirer.component';

describe('HirerComponent', () => {
  let component: HirerComponent;
  let fixture: ComponentFixture<HirerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HirerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
