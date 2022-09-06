export interface CardConfig<T> {
  title: string;
  subTitle: string;
  description: string;
  url: string;
}

export interface CardCollectionConfig<T> {
  cardConfigs: CardConfig<T>[];
}
