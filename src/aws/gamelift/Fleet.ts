import { Value } from '../../kloudformation/Value';
import { CertificateConfigurationProps } from './fleet/CertificateConfigurationProps';
import { IpPermissionProps } from './fleet/IpPermissionProps';
import { ResourceCreationLimitPolicyProps } from './fleet/ResourceCreationLimitPolicyProps';
import { RuntimeConfigurationProps } from './fleet/RuntimeConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function fleet(fleetProps: Fleet & { logicalName?: string }): Fleet { return ({ ...fleetProps, _logicalType: 'AWS::GameLift::Fleet' }) as unknown as Fleet }

export interface Fleet extends KloudResource {
    eC2InstanceType: Value<string>;
    name: Value<string>;
    buildId?: Value<string>;
    certificateConfiguration?: CertificateConfigurationProps;
    description?: Value<string>;
    desiredEC2Instances?: Value<number>;
    eC2InboundPermissions?: IpPermissionProps[];
    fleetType?: Value<string>;
    instanceRoleARN?: Value<string>;
    logPaths?: Value<Value<string>[]>;
    maxSize?: Value<number>;
    metricGroups?: Value<Value<string>[]>;
    minSize?: Value<number>;
    newGameSessionProtectionPolicy?: Value<string>;
    peerVpcAwsAccountId?: Value<string>;
    peerVpcId?: Value<string>;
    resourceCreationLimitPolicy?: ResourceCreationLimitPolicyProps;
    runtimeConfiguration?: RuntimeConfigurationProps;
    scriptId?: Value<string>;
    serverLaunchParameters?: Value<string>;
    serverLaunchPath?: Value<string>;
}