import { Value } from '../../kloudformation/Value';
import { ChefConfigurationProps } from './stack/ChefConfigurationProps';
import { StackConfigurationManagerProps } from './stack/StackConfigurationManagerProps';
import { SourceProps } from './stack/SourceProps';
import { ElasticIpProps } from './stack/ElasticIpProps';
import { RdsDbInstanceProps } from './stack/RdsDbInstanceProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StackAttributes = {  }
export function stack(stackProps: Stack): Stack & { attributes: StackAttributes } { return ({ ...stackProps, _logicalType: 'AWS::OpsWorks::Stack', attributes: {  } }) }

export interface Stack extends KloudResource {
    defaultInstanceProfileArn: Value<string>;
    name: Value<string>;
    serviceRoleArn: Value<string>;
    agentVersion?: Value<string>;
    attributes?: { [key: string]: Value<string> };
    chefConfiguration?: ChefConfigurationProps;
    cloneAppIds?: Value<Value<string>[]>;
    clonePermissions?: Value<boolean>;
    configurationManager?: StackConfigurationManagerProps;
    customCookbooksSource?: SourceProps;
    customJson?: Value<any>;
    defaultAvailabilityZone?: Value<string>;
    defaultOs?: Value<string>;
    defaultRootDeviceType?: Value<string>;
    defaultSshKeyName?: Value<string>;
    defaultSubnetId?: Value<string>;
    ecsClusterArn?: Value<string>;
    elasticIps?: ElasticIpProps[];
    hostnameTheme?: Value<string>;
    rdsDbInstances?: RdsDbInstanceProps[];
    sourceStackId?: Value<string>;
    tags?: Tag[];
    useCustomCookbooks?: Value<boolean>;
    useOpsworksSecurityGroups?: Value<boolean>;
    vpcId?: Value<string>;
}