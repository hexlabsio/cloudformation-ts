import { Value } from '../../../kloudformation/Value';

export function staticValueProps(staticValuePropsProps: StaticValueProps): StaticValueProps { return (staticValuePropsProps) }

export interface StaticValueProps {
    values?: Value<Value<string>[]>;
}