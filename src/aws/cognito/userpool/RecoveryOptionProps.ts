import { Value } from '../../../kloudformation/Value';

export function recoveryOptionProps(recoveryOptionPropsProps: RecoveryOptionProps): RecoveryOptionProps { return (recoveryOptionPropsProps) }

export interface RecoveryOptionProps {
    priority?: Value<number>;
    name?: Value<string>;
}