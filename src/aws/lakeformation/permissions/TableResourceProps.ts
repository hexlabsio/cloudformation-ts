import { Value } from '../../../kloudformation/Value';

export interface TableResourceProps {
  databaseName?: Value<string>
  name?: Value<string>
}