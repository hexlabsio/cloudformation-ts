import { Value } from '../../../kloudformation/Value';

export function connectionDrainingPolicyProps(connectionDrainingPolicyPropsProps: ConnectionDrainingPolicyProps): ConnectionDrainingPolicyProps { return (connectionDrainingPolicyPropsProps) as unknown as ConnectionDrainingPolicyProps }

export interface ConnectionDrainingPolicyProps {
    enabled: Value<boolean>;
    timeout?: Value<number>;
}