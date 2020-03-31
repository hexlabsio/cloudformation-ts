import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DestinationAttributes = { Arn: Attribute<string> }
export function destination(destinationProps: Destination): Destination & { attributes: DestinationAttributes } { return ({ ...destinationProps, _logicalType: 'AWS::Logs::Destination', attributes: { Arn: 'Arn' } }) }

export interface Destination extends KloudResource {
    destinationName: Value<string>;
    destinationPolicy: Value<string>;
    roleArn: Value<string>;
    targetArn: Value<string>;
}