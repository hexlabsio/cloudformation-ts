import { Value } from '../../../kloudformation/Value';
import { OriginGroupFailoverCriteriaProps } from './OriginGroupFailoverCriteriaProps';
import { OriginGroupMembersProps } from './OriginGroupMembersProps';

export interface OriginGroupProps {
  id: Value<string>
  failoverCriteria: OriginGroupFailoverCriteriaProps
  members: OriginGroupMembersProps
}