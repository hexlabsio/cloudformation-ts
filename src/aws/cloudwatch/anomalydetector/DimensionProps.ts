import { Value } from '../../../kloudformation/Value';

export function dimensionProps(dimensionPropsProps: DimensionProps): DimensionProps { return (dimensionPropsProps) }

export interface DimensionProps {
    value: Value<string>;
    name: Value<string>;
}