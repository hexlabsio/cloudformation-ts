import { Value } from '../../../kloudformation/Value';

export function systemControlProps(systemControlPropsProps: SystemControlProps): SystemControlProps { return (systemControlPropsProps) }

export interface SystemControlProps {
    namespace: Value<string>;
    value: Value<string>;
}