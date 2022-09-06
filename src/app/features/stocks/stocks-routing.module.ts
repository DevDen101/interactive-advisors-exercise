import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockListComponent} from './stock-list/stock-list.component';
import {RouterModule, Routes} from '@angular/router';
import {StockDetailsComponent} from './stock-details/stock-details.component';

const routes: Routes = [
  {path: '', component: StockListComponent},
  {path: ':title', component: StockDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StocksRoutingModule {}
