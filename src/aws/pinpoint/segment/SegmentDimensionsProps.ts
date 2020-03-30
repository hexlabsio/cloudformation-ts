import { DemographicProps } from './DemographicProps';
import { Value } from '../../../kloudformation/Value';
import { BehaviorProps } from './BehaviorProps';
import { LocationProps } from './LocationProps';

export function segmentDimensionsProps(segmentDimensionsPropsProps: SegmentDimensionsProps): SegmentDimensionsProps { return (segmentDimensionsPropsProps) as unknown as SegmentDimensionsProps }

export interface SegmentDimensionsProps {
    demographic?: DemographicProps;
    metrics?: Value<any>;
    attributes?: Value<any>;
    behavior?: BehaviorProps;
    userAttributes?: Value<any>;
    location?: LocationProps;
}