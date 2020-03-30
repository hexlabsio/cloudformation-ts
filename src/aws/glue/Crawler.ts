import { Value } from '../../kloudformation/Value';
import { TargetsProps } from './crawler/TargetsProps';
import { SchemaChangePolicyProps } from './crawler/SchemaChangePolicyProps';
import { ScheduleProps } from './crawler/ScheduleProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function crawler(crawlerProps: Crawler & { logicalName?: string }): Crawler { return ({ ...crawlerProps, _logicalType: 'AWS::Glue::Crawler' }) as unknown as Crawler }

export interface Crawler extends KloudResource {
    role: Value<string>;
    targets: TargetsProps;
    classifiers?: Value<Value<string>[]>;
    description?: Value<string>;
    schemaChangePolicy?: SchemaChangePolicyProps;
    configuration?: Value<string>;
    schedule?: ScheduleProps;
    databaseName?: Value<string>;
    crawlerSecurityConfiguration?: Value<string>;
    tablePrefix?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}