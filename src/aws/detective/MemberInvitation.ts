import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function memberInvitation(memberInvitationProps: MemberInvitation): MemberInvitation { return ({ ...memberInvitationProps, _logicalType: '' }) }
  
export interface MemberInvitation extends KloudResource {
  graphArn: Value<string>
  memberId: Value<string>
  memberEmailAddress: Value<string>
  message?: Value<string>
}