import { Value } from '../../kloudformation/Value';
import { SegmentGroupsProps } from './segment/SegmentGroupsProps';
import { SegmentDimensionsProps } from './segment/SegmentDimensionsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type SegmentAttributes = { SegmentId: Attribute<string>; Arn: Attribute<string> }
export function segment(segmentProps: Segment): Segment & { attributes: SegmentAttributes } { return ({ ...segmentProps, _logicalType: 'AWS::Pinpoint::Segment', attributes: { SegmentId: 'SegmentId', Arn: 'Arn' } }) }

export interface Segment extends KloudResource {
    applicationId: Value<string>;
    name: Value<string>;
    segmentGroups?: SegmentGroupsProps;
    dimensions?: SegmentDimensionsProps;
    tags?: Value<any>;
}