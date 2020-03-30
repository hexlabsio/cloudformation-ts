import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instance(instanceProps: Instance & { logicalName?: string }): Instance { return ({ ...instanceProps, _logicalType: 'AWS::ServiceDiscovery::Instance' }) as unknown as Instance }

export interface Instance extends KloudResource {
    instanceAttributes: Value<any>;
    serviceId: Value<string>;
    instanceId?: Value<string>;
}