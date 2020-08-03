import { Value } from '../../../kloudformation/Value';
import { GrpcRouteMetadataMatchMethodProps } from './GrpcRouteMetadataMatchMethodProps';

export interface GrpcRouteMetadataProps {
  invert?: Value<boolean>
  name: Value<string>
  match?: GrpcRouteMetadataMatchMethodProps
}