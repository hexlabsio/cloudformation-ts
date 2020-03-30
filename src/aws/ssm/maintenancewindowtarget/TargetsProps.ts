import { Value } from '../../../kloudformation/Value';

export function targetsProps(targetsPropsProps: TargetsProps): TargetsProps { return (targetsPropsProps) as unknown as TargetsProps }

export interface TargetsProps {
    key: Value<string>;
    values?: Value<Value<string>[]>;
}