import { Value } from '../../kloudformation/Value';
import { TagsProps } from './application/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ApplicationAttributes = {  }
export function application(applicationProps: Application): Application & { attributes: ApplicationAttributes } { return ({ ...applicationProps, _logicalType: 'AWS::AppConfig::Application', attributes: {  } }) }

export interface Application extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    tags?: TagsProps[];
}