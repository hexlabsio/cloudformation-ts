import { Value } from '../../../kloudformation/Value';

export function deploymentConfigurationProps(deploymentConfigurationPropsProps: DeploymentConfigurationProps): DeploymentConfigurationProps { return (deploymentConfigurationPropsProps) }

export interface DeploymentConfigurationProps {
    maximumPercent?: Value<number>;
    minimumHealthyPercent?: Value<number>;
}