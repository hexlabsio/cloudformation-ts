import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MasterAttributes = {  }
export function master(masterProps: Master): Master & { attributes: MasterAttributes } { return ({ ...masterProps, _logicalType: 'AWS::GuardDuty::Master', attributes: {  } }) }

export interface Master extends KloudResource {
    detectorId: Value<string>;
    masterId: Value<string>;
    invitationId?: Value<string>;
}