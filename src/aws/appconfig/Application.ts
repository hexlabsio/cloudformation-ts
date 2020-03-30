import { Value } from '../../kloudformation/Value';
import { TagsProps } from './application/TagsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function application(applicationProps: Application & { logicalName?: string }): Application { return ({ ...applicationProps, _logicalType: 'AWS::AppConfig::Application' }) as unknown as Application }

export interface Application extends KloudResource {
    name: Value<string>;
    description?: Value<string>;
    tags?: TagsProps[];
}