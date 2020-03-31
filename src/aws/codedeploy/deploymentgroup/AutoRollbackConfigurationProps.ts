import { Value } from '../../../kloudformation/Value';

export function autoRollbackConfigurationProps(autoRollbackConfigurationPropsProps: AutoRollbackConfigurationProps): AutoRollbackConfigurationProps { return (autoRollbackConfigurationPropsProps) }

export interface AutoRollbackConfigurationProps {
    enabled?: Value<boolean>;
    events?: Value<Value<string>[]>;
}