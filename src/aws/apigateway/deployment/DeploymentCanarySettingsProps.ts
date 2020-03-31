import { Value } from '../../../kloudformation/Value';

export function deploymentCanarySettingsProps(deploymentCanarySettingsPropsProps: DeploymentCanarySettingsProps): DeploymentCanarySettingsProps { return (deploymentCanarySettingsPropsProps) }

export interface DeploymentCanarySettingsProps {
    percentTraffic?: Value<number>;
    stageVariableOverrides?: { [key: string]: Value<string> };
    useStageCache?: Value<boolean>;
}