import { MemberConfigurationProps } from './member/MemberConfigurationProps';
import { NetworkConfigurationProps } from './member/NetworkConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type MemberAttributes = { MemberId: Attribute<string>; NetworkId: Attribute<string> }
export function member(memberProps: Member): Member & { attributes: MemberAttributes } { return ({ ...memberProps, _logicalType: 'AWS::ManagedBlockchain::Member', attributes: { MemberId: 'MemberId', NetworkId: 'NetworkId' } }) }

export interface Member extends KloudResource {
    memberConfiguration: MemberConfigurationProps;
    networkConfiguration?: NetworkConfigurationProps;
    networkId?: Value<string>;
    invitationId?: Value<string>;
}