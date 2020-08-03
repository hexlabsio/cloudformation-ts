import { Value } from '../../../kloudformation/Value';
import { OriginGroupMemberProps } from './OriginGroupMemberProps';

export interface OriginGroupMembersProps {
  quantity: Value<number>
  items: OriginGroupMemberProps[]
}