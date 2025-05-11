import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsListFormComponent } from './goods-list-form.component';

describe('GoodsListFormComponent', () => {
  let component: GoodsListFormComponent;
  let fixture: ComponentFixture<GoodsListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsListFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
