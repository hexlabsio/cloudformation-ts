import { Value } from '../../../kloudformation/Value';

export function deploymentStyleProps(deploymentStylePropsProps: DeploymentStyleProps): DeploymentStyleProps { return (deploymentStylePropsProps) }

export interface DeploymentStyleProps {
    deploymentOption?: Value<string>;
    deploymentType?: Value<string>;
}