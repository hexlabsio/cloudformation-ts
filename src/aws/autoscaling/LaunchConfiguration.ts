import { Value } from '../../kloudformation/Value';
import { BlockDeviceMappingProps } from './launchconfiguration/BlockDeviceMappingProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LaunchConfigurationAttributes = {  }
export function launchConfiguration(launchConfigurationProps: LaunchConfiguration): LaunchConfiguration & { attributes: LaunchConfigurationAttributes } { return ({ ...launchConfigurationProps, _logicalType: 'AWS::AutoScaling::LaunchConfiguration', attributes: {  } }) }

export interface LaunchConfiguration extends KloudResource {
    imageId: Value<string>;
    instanceType: Value<string>;
    associatePublicIpAddress?: Value<boolean>;
    blockDeviceMappings?: BlockDeviceMappingProps[];
    classicLinkVPCId?: Value<string>;
    classicLinkVPCSecurityGroups?: Value<Value<string>[]>;
    ebsOptimized?: Value<boolean>;
    iamInstanceProfile?: Value<string>;
    instanceId?: Value<string>;
    instanceMonitoring?: Value<boolean>;
    kernelId?: Value<string>;
    keyName?: Value<string>;
    launchConfigurationName?: Value<string>;
    placementTenancy?: Value<string>;
    ramDiskId?: Value<string>;
    securityGroups?: Value<Value<string>[]>;
    spotPrice?: Value<string>;
    userData?: Value<string>;
}