import { Value } from '../../../kloudformation/Value';

export function recoveryOptionProps(recoveryOptionPropsProps: RecoveryOptionProps): RecoveryOptionProps { return (recoveryOptionPropsProps) as unknown as RecoveryOptionProps }

export interface RecoveryOptionProps {
    priority?: Value<number>;
    name?: Value<string>;
}