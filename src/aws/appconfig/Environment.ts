import { Value } from '../../kloudformation/Value';
import { MonitorsProps } from './environment/MonitorsProps';
import { TagsProps } from './environment/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EnvironmentAttributes = {  }
export function environment(environmentProps: Environment): Environment & { attributes: EnvironmentAttributes } { return ({ ...environmentProps, _logicalType: 'AWS::AppConfig::Environment', attributes: {  } }) }

export interface Environment extends KloudResource {
    applicationId: Value<string>;
    name: Value<string>;
    description?: Value<string>;
    monitors?: MonitorsProps[];
    tags?: TagsProps[];
}