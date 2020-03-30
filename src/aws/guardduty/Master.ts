import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function master(masterProps: Master & { logicalName?: string }): Master { return ({ ...masterProps, _logicalType: 'AWS::GuardDuty::Master' }) as unknown as Master }

export interface Master extends KloudResource {
    detectorId: Value<string>;
    masterId: Value<string>;
    invitationId?: Value<string>;
}