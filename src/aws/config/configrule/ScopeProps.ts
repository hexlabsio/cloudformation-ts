import { Value } from '../../../kloudformation/Value';

export function scopeProps(scopePropsProps: ScopeProps): ScopeProps { return (scopePropsProps) }

export interface ScopeProps {
    complianceResourceId?: Value<string>;
    complianceResourceTypes?: Value<Value<string>[]>;
    tagKey?: Value<string>;
    tagValue?: Value<string>;
}