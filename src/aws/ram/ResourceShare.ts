import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function resourceShare(resourceShareProps: ResourceShare & { logicalName?: string }): ResourceShare { return ({ ...resourceShareProps, _logicalType: 'AWS::RAM::ResourceShare' }) as unknown as ResourceShare }

export interface ResourceShare extends KloudResource {
    name: Value<string>;
    principals?: Value<Value<string>[]>;
    allowExternalPrincipals?: Value<boolean>;
    resourceArns?: Value<Value<string>[]>;
    tags?: Tag[];
}