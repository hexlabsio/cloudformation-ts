import { MaxAgeRuleProps } from './MaxAgeRuleProps';
import { MaxCountRuleProps } from './MaxCountRuleProps';

export interface ApplicationVersionLifecycleConfigProps {
  maxAgeRule?: MaxAgeRuleProps
  maxCountRule?: MaxCountRuleProps
}