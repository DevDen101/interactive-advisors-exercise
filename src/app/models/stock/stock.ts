import {DataPoint} from '../data-point/data-point';

export interface Stock {
  title: string;
  subTitle: string;
  date: string;
  url: string;
  description: string;
  chart: DataPoint[];
}
