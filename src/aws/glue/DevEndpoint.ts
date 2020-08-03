import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function devEndpoint(devEndpointProps: DevEndpoint): DevEndpoint { return ({ ...devEndpointProps, _logicalType: '' }) }
  
export interface DevEndpoint extends KloudResource {
  extraJarsS3Path?: Value<string>
  publicKey?: Value<string>
  numberOfNodes?: Value<number>
  arguments?: Value<any>
  subnetId?: Value<string>
  publicKeys?: Value<Value<string>[]>
  securityGroupIds?: Value<Value<string>[]>
  roleArn: Value<string>
  workerType?: Value<string>
  endpointName?: Value<string>
  glueVersion?: Value<string>
  extraPythonLibsS3Path?: Value<string>
  securityConfiguration?: Value<string>
  numberOfWorkers?: Value<number>
  tags?: Value<any>
}