import { Value } from '../../../kloudformation/Value';
import { GrpcRouteMetadataProps } from './GrpcRouteMetadataProps';

export function grpcRouteMatchProps(grpcRouteMatchPropsProps: GrpcRouteMatchProps): GrpcRouteMatchProps { return (grpcRouteMatchPropsProps) }

export interface GrpcRouteMatchProps {
    serviceName?: Value<string>;
    metadata?: GrpcRouteMetadataProps[];
    methodName?: Value<string>;
}