import { Value } from '../../../kloudformation/Value';

export function staticValueProps(staticValuePropsProps: StaticValueProps): StaticValueProps { return (staticValuePropsProps) as unknown as StaticValueProps }

export interface StaticValueProps {
    values?: Value<Value<string>[]>;
}