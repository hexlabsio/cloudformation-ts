import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stack(stackProps: Stack & { logicalName?: string }): Stack { return ({ ...stackProps, _logicalType: 'AWS::CloudFormation::Stack' }) as unknown as Stack }

export interface Stack extends KloudResource {
    templateURL: Value<string>;
    notificationARNs?: Value<Value<string>[]>;
    parameters?: { [key: string]: Value<string> };
    tags?: Tag[];
    timeoutInMinutes?: Value<number>;
}