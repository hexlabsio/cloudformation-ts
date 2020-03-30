import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function destination(destinationProps: Destination & { logicalName?: string }): Destination { return ({ ...destinationProps, _logicalType: 'AWS::Logs::Destination' }) as unknown as Destination }

export interface Destination extends KloudResource {
    destinationName: Value<string>;
    destinationPolicy: Value<string>;
    roleArn: Value<string>;
    targetArn: Value<string>;
}