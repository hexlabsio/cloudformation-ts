import { Value } from '../../../kloudformation/Value';
import { GrpcRouteMetadataProps } from './GrpcRouteMetadataProps';

export interface GrpcRouteMatchProps {
  serviceName?: Value<string>
  metadata?: GrpcRouteMetadataProps[]
  methodName?: Value<string>
}