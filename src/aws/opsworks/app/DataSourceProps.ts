import { Value } from '../../../kloudformation/Value';

export interface DataSourceProps {
  arn?: Value<string>
  databaseName?: Value<string>
  type?: Value<string>
}