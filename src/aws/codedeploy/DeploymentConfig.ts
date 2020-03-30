import { Value } from '../../kloudformation/Value';
import { MinimumHealthyHostsProps } from './deploymentconfig/MinimumHealthyHostsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function deploymentConfig(deploymentConfigProps: DeploymentConfig & { logicalName?: string }): DeploymentConfig { return ({ ...deploymentConfigProps, _logicalType: 'AWS::CodeDeploy::DeploymentConfig' }) as unknown as DeploymentConfig }

export interface DeploymentConfig extends KloudResource {
    deploymentConfigName?: Value<string>;
    minimumHealthyHosts?: MinimumHealthyHostsProps;
}