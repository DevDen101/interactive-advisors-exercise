import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import {take, tap} from 'rxjs';
import {Stock} from '../../../models/stock/stock';
import {setStocks} from '../../../store/stock/actions/stocks.actions';
import {getStocks} from '../../../store/stock/reducers/stock.reducer';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.scss'],
})
export class StockDetailsComponent implements OnInit {
  public stock: Stock = {
    title: '',
    description: '',
    subTitle: '',
    chart: [],
    date: '',
    url: '',
  };

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: '#FC5130',
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };

  public lineChartLegend = false;

  constructor(private _store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._store.dispatch(setStocks());

    this._store
      .pipe(
        take(1),
        select(getStocks),
        tap((stocks: Stock[]) => {
          console.log('Stocks:', stocks);
          const stock = stocks.find(
            (stock) =>
              stock.title ===
              this.route.snapshot.paramMap.get('title')?.split('-').join(' ')
          );

          if (stock) {
            this.stock = stock;
            this._setChartConfig();
          }
        })
      )
      .subscribe();
  }

  private _setChartConfig() {
    this.stock.chart.forEach((chartData) => {
      this.lineChartData.labels?.push(chartData.x);
      this.lineChartData.datasets[0].data.push(chartData.y);
    });
  }
}
