import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {CardConfig} from '../../../models/card-config/card-config';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent<T> {
  @Input() cardConfig: CardConfig<T> = {
    description: '',
    subTitle: '',
    title: '',
    url: '',
  };

  @Output() navigationAction = new EventEmitter();

  constructor(private _router: Router) {}

  public navigateToEntity() {
    this._router.navigateByUrl(
      this._router.url + '/' + this.cardConfig.title.split(' ').join('-')
    );
  }

  public openLink() {
    window.open(this.cardConfig.url);
  }
}
