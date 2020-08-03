import { Value } from '../../kloudformation/Value';
import { ChefConfigurationProps } from './stack/ChefConfigurationProps';
import { StackConfigurationManagerProps } from './stack/StackConfigurationManagerProps';
import { SourceProps } from './stack/SourceProps';
import { ElasticIpProps } from './stack/ElasticIpProps';
import { RdsDbInstanceProps } from './stack/RdsDbInstanceProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function stack(stackProps: Stack): Stack { return ({ ...stackProps, _logicalType: '' }) }
  
export interface Stack extends KloudResource {
  agentVersion?: Value<string>
  attributes?: Value<Value<string>[]>
  chefConfiguration?: ChefConfigurationProps
  cloneAppIds?: Value<Value<string>[]>
  clonePermissions?: Value<boolean>
  configurationManager?: StackConfigurationManagerProps
  customCookbooksSource?: SourceProps
  customJson?: Value<any>
  defaultAvailabilityZone?: Value<string>
  defaultInstanceProfileArn: Value<string>
  defaultOs?: Value<string>
  defaultRootDeviceType?: Value<string>
  defaultSshKeyName?: Value<string>
  defaultSubnetId?: Value<string>
  ecsClusterArn?: Value<string>
  elasticIps?: ElasticIpProps[]
  hostnameTheme?: Value<string>
  name: Value<string>
  rdsDbInstances?: RdsDbInstanceProps[]
  serviceRoleArn: Value<string>
  sourceStackId?: Value<string>
  tags?: Tag[]
  useCustomCookbooks?: Value<boolean>
  useOpsworksSecurityGroups?: Value<boolean>
  vpcId?: Value<string>
}