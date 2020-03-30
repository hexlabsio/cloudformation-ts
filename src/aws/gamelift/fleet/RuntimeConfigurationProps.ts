import { Value } from '../../../kloudformation/Value';
import { ServerProcessProps } from './ServerProcessProps';

export function runtimeConfigurationProps(runtimeConfigurationPropsProps: RuntimeConfigurationProps): RuntimeConfigurationProps { return (runtimeConfigurationPropsProps) as unknown as RuntimeConfigurationProps }

export interface RuntimeConfigurationProps {
    gameSessionActivationTimeoutSeconds?: Value<number>;
    maxConcurrentGameSessionActivations?: Value<number>;
    serverProcesses?: ServerProcessProps[];
}