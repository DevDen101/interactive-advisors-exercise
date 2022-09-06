import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Stock} from '../../../models/stock/stock';

import {CardCollectionComponent} from './card-collection.component';

describe('CardCollectionComponent', () => {
  let component: CardCollectionComponent<Stock>;
  let fixture: ComponentFixture<CardCollectionComponent<Stock>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardCollectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
