import { Value } from '../../../kloudformation/Value';

export function connectionDrainingPolicyProps(connectionDrainingPolicyPropsProps: ConnectionDrainingPolicyProps): ConnectionDrainingPolicyProps { return (connectionDrainingPolicyPropsProps) }

export interface ConnectionDrainingPolicyProps {
    enabled: Value<boolean>;
    timeout?: Value<number>;
}