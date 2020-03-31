import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type InstanceAttributes = {  }
export function instance(instanceProps: Instance): Instance & { attributes: InstanceAttributes } { return ({ ...instanceProps, _logicalType: 'AWS::ServiceDiscovery::Instance', attributes: {  } }) }

export interface Instance extends KloudResource {
    instanceAttributes: Value<any>;
    serviceId: Value<string>;
    instanceId?: Value<string>;
}