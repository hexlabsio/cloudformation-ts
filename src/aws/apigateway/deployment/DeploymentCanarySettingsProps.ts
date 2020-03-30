import { Value } from '../../../kloudformation/Value';

export function deploymentCanarySettingsProps(deploymentCanarySettingsPropsProps: DeploymentCanarySettingsProps): DeploymentCanarySettingsProps { return (deploymentCanarySettingsPropsProps) as unknown as DeploymentCanarySettingsProps }

export interface DeploymentCanarySettingsProps {
    percentTraffic?: Value<number>;
    stageVariableOverrides?: { [key: string]: Value<string> };
    useStageCache?: Value<boolean>;
}