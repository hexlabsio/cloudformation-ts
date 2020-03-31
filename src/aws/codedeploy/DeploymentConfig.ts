import { Value } from '../../kloudformation/Value';
import { MinimumHealthyHostsProps } from './deploymentconfig/MinimumHealthyHostsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DeploymentConfigAttributes = {  }
export function deploymentConfig(deploymentConfigProps: DeploymentConfig): DeploymentConfig & { attributes: DeploymentConfigAttributes } { return ({ ...deploymentConfigProps, _logicalType: 'AWS::CodeDeploy::DeploymentConfig', attributes: {  } }) }

export interface DeploymentConfig extends KloudResource {
    deploymentConfigName?: Value<string>;
    minimumHealthyHosts?: MinimumHealthyHostsProps;
}