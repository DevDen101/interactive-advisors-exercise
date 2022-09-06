import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StocksRoutingModule} from './stocks-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {StockListComponent} from './stock-list/stock-list.component';
import {StockDetailsComponent} from './stock-details/stock-details.component';
import {NgChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [StockListComponent, StockDetailsComponent],
  imports: [CommonModule, StocksRoutingModule, SharedModule, NgChartsModule],
})
export class StocksModule {}
