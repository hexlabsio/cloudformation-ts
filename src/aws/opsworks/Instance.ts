import { Value } from '../../kloudformation/Value';
import { BlockDeviceMappingProps } from './instance/BlockDeviceMappingProps';
import { TimeBasedAutoScalingProps } from './instance/TimeBasedAutoScalingProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function instance(instanceProps: Instance & { logicalName?: string }): Instance { return ({ ...instanceProps, _logicalType: 'AWS::OpsWorks::Instance' }) as unknown as Instance }

export interface Instance extends KloudResource {
    instanceType: Value<string>;
    layerIds: Value<Value<string>[]>;
    stackId: Value<string>;
    agentVersion?: Value<string>;
    amiId?: Value<string>;
    architecture?: Value<string>;
    autoScalingType?: Value<string>;
    availabilityZone?: Value<string>;
    blockDeviceMappings?: BlockDeviceMappingProps[];
    ebsOptimized?: Value<boolean>;
    elasticIps?: Value<Value<string>[]>;
    hostname?: Value<string>;
    installUpdatesOnBoot?: Value<boolean>;
    os?: Value<string>;
    rootDeviceType?: Value<string>;
    sshKeyName?: Value<string>;
    subnetId?: Value<string>;
    tenancy?: Value<string>;
    timeBasedAutoScaling?: TimeBasedAutoScalingProps;
    virtualizationType?: Value<string>;
    volumes?: Value<Value<string>[]>;
}