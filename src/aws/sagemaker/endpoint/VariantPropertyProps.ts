import { Value } from '../../../kloudformation/Value';

export function variantPropertyProps(variantPropertyPropsProps: VariantPropertyProps): VariantPropertyProps { return (variantPropertyPropsProps) as unknown as VariantPropertyProps }

export interface VariantPropertyProps {
    variantPropertyType?: Value<string>;
}