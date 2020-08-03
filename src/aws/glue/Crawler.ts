import { Value } from '../../kloudformation/Value';
import { SchemaChangePolicyProps } from './crawler/SchemaChangePolicyProps';
import { ScheduleProps } from './crawler/ScheduleProps';
import { TargetsProps } from './crawler/TargetsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function crawler(crawlerProps: Crawler): Crawler { return ({ ...crawlerProps, _logicalType: '' }) }
  
export interface Crawler extends KloudResource {
  role: Value<string>
  classifiers?: Value<Value<string>[]>
  description?: Value<string>
  schemaChangePolicy?: SchemaChangePolicyProps
  configuration?: Value<string>
  schedule?: ScheduleProps
  databaseName?: Value<string>
  targets: TargetsProps
  crawlerSecurityConfiguration?: Value<string>
  tablePrefix?: Value<string>
  tags?: Value<any>
  name?: Value<string>
}