import { MemberConfigurationProps } from './member/MemberConfigurationProps';
import { NetworkConfigurationProps } from './member/NetworkConfigurationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function member(memberProps: Member & { logicalName?: string }): Member { return ({ ...memberProps, _logicalType: 'AWS::ManagedBlockchain::Member' }) as unknown as Member }

export interface Member extends KloudResource {
    memberConfiguration: MemberConfigurationProps;
    networkConfiguration?: NetworkConfigurationProps;
    networkId?: Value<string>;
    invitationId?: Value<string>;
}