import { Value } from '../../../kloudformation/Value';
import { GrpcRouteMetadataMatchMethodProps } from './GrpcRouteMetadataMatchMethodProps';

export function grpcRouteMetadataProps(grpcRouteMetadataPropsProps: GrpcRouteMetadataProps): GrpcRouteMetadataProps { return (grpcRouteMetadataPropsProps) as unknown as GrpcRouteMetadataProps }

export interface GrpcRouteMetadataProps {
    name: Value<string>;
    invert?: Value<boolean>;
    match?: GrpcRouteMetadataMatchMethodProps;
}