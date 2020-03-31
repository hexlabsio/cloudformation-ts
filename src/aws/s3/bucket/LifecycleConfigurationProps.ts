import { RuleProps } from './RuleProps';

export function lifecycleConfigurationProps(lifecycleConfigurationPropsProps: LifecycleConfigurationProps): LifecycleConfigurationProps { return (lifecycleConfigurationPropsProps) }

export interface LifecycleConfigurationProps {
    rules: RuleProps[];
}