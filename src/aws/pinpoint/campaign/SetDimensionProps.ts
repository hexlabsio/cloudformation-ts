import { Value } from '../../../kloudformation/Value';

export function setDimensionProps(setDimensionPropsProps: SetDimensionProps): SetDimensionProps { return (setDimensionPropsProps) as unknown as SetDimensionProps }

export interface SetDimensionProps {
    dimensionType?: Value<string>;
    values?: Value<Value<string>[]>;
}