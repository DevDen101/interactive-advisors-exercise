import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {Stock} from '../../../models/stock/stock';

import {CardComponent} from './card.component';

describe('CardComponent', () => {
  let component: CardComponent<Stock>;
  let fixture: ComponentFixture<CardComponent<Stock>>;
  const router = jasmine.createSpyObj(['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
      providers: [
        {
          provide: Router,
          useValue: {...router, url: 'testUrl'},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('navigateToEntity', () => {
    it('should navigate using the router url and card config title', () => {
      component.cardConfig.title = 'Test Card Config';
      component.navigateToEntity();
      expect(router.navigateByUrl).toHaveBeenCalledWith(
        'testUrl/Test-Card-Config'
      );
    });
  });

  describe('openLink', () => {
    it('should navigate using the router url and card config title', () => {
      const windowOpenSpy = spyOn(window, 'open');

      component.cardConfig.url = 'testUrl';

      component.openLink();

      expect(windowOpenSpy).toHaveBeenCalledWith(component.cardConfig.url);
    });
  });
});
