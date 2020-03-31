import { Value } from '../../../kloudformation/Value';
import { SegmentDimensionsProps } from './SegmentDimensionsProps';
import { SourceSegmentsProps } from './SourceSegmentsProps';

export function groupsProps(groupsPropsProps: GroupsProps): GroupsProps { return (groupsPropsProps) }

export interface GroupsProps {
    type?: Value<string>;
    sourceType?: Value<string>;
    dimensions?: SegmentDimensionsProps[];
    sourceSegments?: SourceSegmentsProps[];
}