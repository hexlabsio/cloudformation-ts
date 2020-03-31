import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DevEndpointAttributes = {  }
export function devEndpoint(devEndpointProps: DevEndpoint): DevEndpoint & { attributes: DevEndpointAttributes } { return ({ ...devEndpointProps, _logicalType: 'AWS::Glue::DevEndpoint', attributes: {  } }) }

export interface DevEndpoint extends KloudResource {
    roleArn: Value<string>;
    extraJarsS3Path?: Value<string>;
    publicKey?: Value<string>;
    numberOfNodes?: Value<number>;
    arguments?: Value<any>;
    subnetId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    workerType?: Value<string>;
    endpointName?: Value<string>;
    glueVersion?: Value<string>;
    extraPythonLibsS3Path?: Value<string>;
    securityConfiguration?: Value<string>;
    numberOfWorkers?: Value<number>;
    tags?: Value<any>;
}