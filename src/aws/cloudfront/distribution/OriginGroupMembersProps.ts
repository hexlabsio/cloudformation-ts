import { Value } from '../../../kloudformation/Value';
import { OriginGroupMemberProps } from './OriginGroupMemberProps';

export function originGroupMembersProps(originGroupMembersPropsProps: OriginGroupMembersProps): OriginGroupMembersProps { return (originGroupMembersPropsProps) }

export interface OriginGroupMembersProps {
    quantity: Value<number>;
    items: OriginGroupMemberProps[];
}