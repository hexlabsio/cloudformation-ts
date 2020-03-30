import { RuleProps } from './RuleProps';

export function lifecycleConfigurationProps(lifecycleConfigurationPropsProps: LifecycleConfigurationProps): LifecycleConfigurationProps { return (lifecycleConfigurationPropsProps) as unknown as LifecycleConfigurationProps }

export interface LifecycleConfigurationProps {
    rules: RuleProps[];
}