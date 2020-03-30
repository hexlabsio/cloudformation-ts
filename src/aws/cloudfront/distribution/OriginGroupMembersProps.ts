import { Value } from '../../../kloudformation/Value';
import { OriginGroupMemberProps } from './OriginGroupMemberProps';

export function originGroupMembersProps(originGroupMembersPropsProps: OriginGroupMembersProps): OriginGroupMembersProps { return (originGroupMembersPropsProps) as unknown as OriginGroupMembersProps }

export interface OriginGroupMembersProps {
    quantity: Value<number>;
    items: OriginGroupMemberProps[];
}