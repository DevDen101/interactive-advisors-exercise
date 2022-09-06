import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GlobalMaterialModule} from './modules/global-material/global-material.module';
import {CardComponent} from './components/card/card.component';
import {CardCollectionComponent} from './components/card-collection/card-collection.component';

@NgModule({
  declarations: [CardComponent, CardCollectionComponent],
  imports: [CommonModule, GlobalMaterialModule],
  exports: [CardComponent, CardCollectionComponent, GlobalMaterialModule],
})
export class SharedModule {}
