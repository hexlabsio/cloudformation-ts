import { Value } from '../../../kloudformation/Value';

export interface CatalogTargetProps {
  databaseName?: Value<string>
  tables?: Value<Value<string>[]>
}