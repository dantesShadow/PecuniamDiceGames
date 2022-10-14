import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceHandComponent } from './dice-hand.component';

describe('DiceHandComponent', () => {
  let component: DiceHandComponent;
  let fixture: ComponentFixture<DiceHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiceHandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiceHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
