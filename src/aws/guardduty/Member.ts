import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MemberAttributes = {  }
export function member(memberProps: Member): Member & { attributes: MemberAttributes } { return ({ ...memberProps, _logicalType: 'AWS::GuardDuty::Member', attributes: {  } }) }

export interface Member extends KloudResource {
    memberId: Value<string>;
    email: Value<string>;
    detectorId: Value<string>;
    status?: Value<string>;
    message?: Value<string>;
    disableEmailNotification?: Value<boolean>;
}