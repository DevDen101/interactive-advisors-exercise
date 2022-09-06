import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {take, tap} from 'rxjs';
import {CardCollectionConfig} from '../../../models/card-config/card-config';
import {Stock} from '../../../models/stock/stock';
import {setStocks} from '../../../store/stock/actions/stocks.actions';
import {getStocks} from '../../../store/stock/reducers/stock.reducer';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
})
export class StockListComponent implements OnInit {
  private _stocks: Stock[] = [];
  public cardCollectionConfig: CardCollectionConfig<Stock> = {cardConfigs: []};

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(setStocks());

    this._store
      .pipe(
        take(1),
        select(getStocks),
        tap((stocks: Stock[]) => {
          this._stocks = stocks;
          this._setCardConfig();
        })
      )
      .subscribe();
  }

  private _setCardConfig() {
    this._stocks.forEach((stock) => {
      this.cardCollectionConfig.cardConfigs.push({
        description: stock.description,
        subTitle: stock.subTitle,
        title: stock.title,
        url: stock.url,
      });
    });
  }
}
