import { ShutdownEventConfigurationProps } from './ShutdownEventConfigurationProps';

export function lifecycleEventConfigurationProps(lifecycleEventConfigurationPropsProps: LifecycleEventConfigurationProps): LifecycleEventConfigurationProps { return (lifecycleEventConfigurationPropsProps) }

export interface LifecycleEventConfigurationProps {
    shutdownEventConfiguration?: ShutdownEventConfigurationProps;
}