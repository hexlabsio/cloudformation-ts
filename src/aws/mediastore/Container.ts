import { Value } from '../../kloudformation/Value';
import { CorsRuleProps } from './container/CorsRuleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ContainerAttributes = { Endpoint: Attribute<string> }
export function container(containerProps: Container): Container & { attributes: ContainerAttributes } { return ({ ...containerProps, _logicalType: 'AWS::MediaStore::Container', attributes: { Endpoint: 'Endpoint' } }) }

export interface Container extends KloudResource {
    containerName: Value<string>;
    policy?: Value<string>;
    corsPolicy?: CorsRuleProps[];
    lifecyclePolicy?: Value<string>;
    accessLoggingEnabled?: Value<boolean>;
}