import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type FleetAttributes = { Arn: Attribute<string> }
export function fleet(fleetProps: Fleet): Fleet & { attributes: FleetAttributes } { return ({ ...fleetProps, _logicalType: 'AWS::RoboMaker::Fleet', attributes: { Arn: 'Arn' } }) }

export interface Fleet extends KloudResource {
    tags?: Value<any>;
    name?: Value<string>;
}