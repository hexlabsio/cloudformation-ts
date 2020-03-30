import { Value } from '../../../kloudformation/Value';
import { OriginGroupFailoverCriteriaProps } from './OriginGroupFailoverCriteriaProps';
import { OriginGroupMembersProps } from './OriginGroupMembersProps';

export function originGroupProps(originGroupPropsProps: OriginGroupProps): OriginGroupProps { return (originGroupPropsProps) as unknown as OriginGroupProps }

export interface OriginGroupProps {
    id: Value<string>;
    failoverCriteria: OriginGroupFailoverCriteriaProps;
    members: OriginGroupMembersProps;
}