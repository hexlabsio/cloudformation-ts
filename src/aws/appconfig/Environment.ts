import { Value } from '../../kloudformation/Value';
import { MonitorsProps } from './environment/MonitorsProps';
import { TagsProps } from './environment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function environment(environmentProps: Environment & { logicalName?: string }): Environment { return ({ ...environmentProps, _logicalType: 'AWS::AppConfig::Environment' }) as unknown as Environment }

export interface Environment extends KloudResource {
    applicationId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    monitors?: MonitorsProps[];
    tags?: TagsProps[];
}