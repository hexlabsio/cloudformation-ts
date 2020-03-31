import { Value } from '../../../kloudformation/Value';
import { MatchRangeProps } from './MatchRangeProps';

export function grpcRouteMetadataMatchMethodProps(grpcRouteMetadataMatchMethodPropsProps: GrpcRouteMetadataMatchMethodProps): GrpcRouteMetadataMatchMethodProps { return (grpcRouteMetadataMatchMethodPropsProps) }

export interface GrpcRouteMetadataMatchMethodProps {
    suffix?: Value<string>;
    regex?: Value<string>;
    exact?: Value<string>;
    prefix?: Value<string>;
    range?: MatchRangeProps;
}