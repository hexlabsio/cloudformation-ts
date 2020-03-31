import { Value } from '../../../kloudformation/Value';
import { NetworkConfigurationProps } from './NetworkConfigurationProps';

export function ecsParametersProps(ecsParametersPropsProps: EcsParametersProps): EcsParametersProps { return (ecsParametersPropsProps) }

export interface EcsParametersProps {
    taskDefinitionArn: Value<string>;
    group?: Value<string>;
    launchType?: Value<string>;
    networkConfiguration?: NetworkConfigurationProps;
    platformVersion?: Value<string>;
    taskCount?: Value<number>;
}