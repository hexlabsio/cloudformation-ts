import { Value } from '../../../kloudformation/Value';

export function shutdownEventConfigurationProps(shutdownEventConfigurationPropsProps: ShutdownEventConfigurationProps): ShutdownEventConfigurationProps { return (shutdownEventConfigurationPropsProps) as unknown as ShutdownEventConfigurationProps }

export interface ShutdownEventConfigurationProps {
    delayUntilElbConnectionsDrained?: Value<boolean>;
    executionTimeout?: Value<number>;
}