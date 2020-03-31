import { Value } from '../../../kloudformation/Value';

export function targetsProps(targetsPropsProps: TargetsProps): TargetsProps { return (targetsPropsProps) }

export interface TargetsProps {
    key: Value<string>;
    values?: Value<Value<string>[]>;
}