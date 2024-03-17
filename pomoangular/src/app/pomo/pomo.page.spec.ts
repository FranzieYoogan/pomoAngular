import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PomoPage } from './pomo.page';

describe('PomoPage', () => {
  let component: PomoPage;
  let fixture: ComponentFixture<PomoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PomoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
