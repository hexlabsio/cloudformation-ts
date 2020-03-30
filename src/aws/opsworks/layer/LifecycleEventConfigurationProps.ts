import { ShutdownEventConfigurationProps } from './ShutdownEventConfigurationProps';

export function lifecycleEventConfigurationProps(lifecycleEventConfigurationPropsProps: LifecycleEventConfigurationProps): LifecycleEventConfigurationProps { return (lifecycleEventConfigurationPropsProps) as unknown as LifecycleEventConfigurationProps }

export interface LifecycleEventConfigurationProps {
    shutdownEventConfiguration?: ShutdownEventConfigurationProps;
}