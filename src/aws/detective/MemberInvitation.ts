import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type MemberInvitationAttributes = {  }
export function memberInvitation(memberInvitationProps: MemberInvitation): MemberInvitation & { attributes: MemberInvitationAttributes } { return ({ ...memberInvitationProps, _logicalType: 'AWS::Detective::MemberInvitation', attributes: {  } }) }

export interface MemberInvitation extends KloudResource {
    graphArn: Value<string>;
    memberId: Value<string>;
    memberEmailAddress: Value<string>;
    message?: Value<string>;
}