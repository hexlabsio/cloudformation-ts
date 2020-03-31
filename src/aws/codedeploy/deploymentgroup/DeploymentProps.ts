import { RevisionLocationProps } from './RevisionLocationProps';
import { Value } from '../../../kloudformation/Value';

export function deploymentProps(deploymentPropsProps: DeploymentProps): DeploymentProps { return (deploymentPropsProps) }

export interface DeploymentProps {
    revision: RevisionLocationProps;
    description?: Value<string>;
    ignoreApplicationStopFailures?: Value<boolean>;
}