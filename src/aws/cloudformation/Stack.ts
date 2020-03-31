import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StackAttributes = {  }
export function stack(stackProps: Stack): Stack & { attributes: StackAttributes } { return ({ ...stackProps, _logicalType: 'AWS::CloudFormation::Stack', attributes: {  } }) }

export interface Stack extends KloudResource {
    templateURL: Value<string>;
    notificationARNs?: Value<Value<string>[]>;
    parameters?: { [key: string]: Value<string> };
    tags?: Tag[];
    timeoutInMinutes?: Value<number>;
}