import { Value } from '../../kloudformation/Value';
import { MinimumHealthyHostsProps } from './deploymentConfig/MinimumHealthyHostsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function deploymentConfig(deploymentConfigProps: DeploymentConfig): DeploymentConfig { return ({ ...deploymentConfigProps, _logicalType: '' }) }
  
export interface DeploymentConfig extends KloudResource {
  deploymentConfigName?: Value<string>
  minimumHealthyHosts?: MinimumHealthyHostsProps
}