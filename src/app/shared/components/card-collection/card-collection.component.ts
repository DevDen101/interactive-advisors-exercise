import {Component, Input} from '@angular/core';
import {CardCollectionConfig} from '../../../models/card-config/card-config';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss'],
})
export class CardCollectionComponent<T> {
  @Input() cardCollectionConfig: CardCollectionConfig<T> = {cardConfigs: []};
}
