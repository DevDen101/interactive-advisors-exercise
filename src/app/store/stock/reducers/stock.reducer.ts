import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
  Action,
} from '@ngrx/store';
import {Stock} from '../../../models/stock/stock';
import {setStocks} from '../actions/stocks.actions';
import stockData from '../../../../assets/data/stock-data.json';

export const stockFeatureKey = 'StockState';

export interface StockState {
  stocks: Stock[];
}

export const initialStockState: StockState = {
  stocks: [],
};

const _stockReducer = createReducer(
  initialStockState,
  on(setStocks, (state) => {
    return {
      ...state,
      stocks: stockData.data,
    };
  })
);

export function stockReducer(state: StockState | undefined, action: Action) {
  return _stockReducer(state, action);
}

const featureSelector = createFeatureSelector<StockState>('stock');

export const getStocks = createSelector(
  featureSelector,
  (stockState: StockState) => {
    return stockState.stocks;
  }
);
