import { Value } from '../../../kloudformation/Value';

export function canarySettingProps(canarySettingPropsProps: CanarySettingProps): CanarySettingProps { return (canarySettingPropsProps) }

export interface CanarySettingProps {
    deploymentId?: Value<string>;
    percentTraffic?: Value<number>;
    stageVariableOverrides?: { [key: string]: Value<string> };
    useStageCache?: Value<boolean>;
}