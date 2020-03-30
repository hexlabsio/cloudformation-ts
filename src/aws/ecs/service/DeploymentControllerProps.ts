import { Value } from '../../../kloudformation/Value';

export function deploymentControllerProps(deploymentControllerPropsProps: DeploymentControllerProps): DeploymentControllerProps { return (deploymentControllerPropsProps) as unknown as DeploymentControllerProps }

export interface DeploymentControllerProps {
    type?: Value<string>;
}