import { Value } from '../../../kloudformation/Value';

export function systemControlProps(systemControlPropsProps: SystemControlProps): SystemControlProps { return (systemControlPropsProps) as unknown as SystemControlProps }

export interface SystemControlProps {
    namespace: Value<string>;
    value: Value<string>;
}