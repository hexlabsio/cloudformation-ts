import { Value } from '../../kloudformation/Value';
import { SegmentGroupsProps } from './segment/SegmentGroupsProps';
import { SegmentDimensionsProps } from './segment/SegmentDimensionsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function segment(segmentProps: Segment & { logicalName?: string }): Segment { return ({ ...segmentProps, _logicalType: 'AWS::Pinpoint::Segment' }) as unknown as Segment }

export interface Segment extends KloudResource {
    applicationId: Value<string>;
    name: Value<string>;
    segmentGroups?: SegmentGroupsProps;
    dimensions?: SegmentDimensionsProps;
    tags?: Value<any>;
}