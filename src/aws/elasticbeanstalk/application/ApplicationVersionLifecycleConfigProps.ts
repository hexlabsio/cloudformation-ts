import { MaxAgeRuleProps } from './MaxAgeRuleProps';
import { MaxCountRuleProps } from './MaxCountRuleProps';

export function applicationVersionLifecycleConfigProps(applicationVersionLifecycleConfigPropsProps: ApplicationVersionLifecycleConfigProps): ApplicationVersionLifecycleConfigProps { return (applicationVersionLifecycleConfigPropsProps) }

export interface ApplicationVersionLifecycleConfigProps {
    maxAgeRule?: MaxAgeRuleProps;
    maxCountRule?: MaxCountRuleProps;
}