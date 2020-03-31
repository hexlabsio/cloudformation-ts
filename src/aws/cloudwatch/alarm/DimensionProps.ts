import { Value } from '../../../kloudformation/Value';

export function dimensionProps(dimensionPropsProps: DimensionProps): DimensionProps { return (dimensionPropsProps) }

export interface DimensionProps {
    name: Value<string>;
    value: Value<string>;
}