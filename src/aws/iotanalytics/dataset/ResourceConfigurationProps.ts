import { Value } from '../../../kloudformation/Value';

export function resourceConfigurationProps(resourceConfigurationPropsProps: ResourceConfigurationProps): ResourceConfigurationProps { return (resourceConfigurationPropsProps) as unknown as ResourceConfigurationProps }

export interface ResourceConfigurationProps {
    volumeSizeInGB: Value<number>;
    computeType: Value<string>;
}