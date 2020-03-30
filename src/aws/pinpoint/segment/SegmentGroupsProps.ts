import { GroupsProps } from './GroupsProps';
import { Value } from '../../../kloudformation/Value';

export function segmentGroupsProps(segmentGroupsPropsProps: SegmentGroupsProps): SegmentGroupsProps { return (segmentGroupsPropsProps) as unknown as SegmentGroupsProps }

export interface SegmentGroupsProps {
    groups?: GroupsProps[];
    include?: Value<string>;
}