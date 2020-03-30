import { Value } from '../../../kloudformation/Value';

export function deploymentStyleProps(deploymentStylePropsProps: DeploymentStyleProps): DeploymentStyleProps { return (deploymentStylePropsProps) as unknown as DeploymentStyleProps }

export interface DeploymentStyleProps {
    deploymentOption?: Value<string>;
    deploymentType?: Value<string>;
}