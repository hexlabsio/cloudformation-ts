import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function fleet(fleetProps: Fleet & { logicalName?: string }): Fleet { return ({ ...fleetProps, _logicalType: 'AWS::RoboMaker::Fleet' }) as unknown as Fleet }

export interface Fleet extends KloudResource {
    tags?: Value<any>;
    name?: Value<string>;
}