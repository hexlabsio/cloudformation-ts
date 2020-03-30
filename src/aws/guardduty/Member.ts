import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function member(memberProps: Member & { logicalName?: string }): Member { return ({ ...memberProps, _logicalType: 'AWS::GuardDuty::Member' }) as unknown as Member }

export interface Member extends KloudResource {
    memberId: Value<string>;
    email: Value<string>;
    detectorId: Value<string>;
    status?: Value<string>;
    message?: Value<string>;
    disableEmailNotification?: Value<boolean>;
}