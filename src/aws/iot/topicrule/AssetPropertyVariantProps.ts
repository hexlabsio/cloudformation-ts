import { Value } from '../../../kloudformation/Value';

export function assetPropertyVariantProps(assetPropertyVariantPropsProps: AssetPropertyVariantProps): AssetPropertyVariantProps { return (assetPropertyVariantPropsProps) }

export interface AssetPropertyVariantProps {
    booleanValue?: Value<string>;
    doubleValue?: Value<string>;
    integerValue?: Value<string>;
    stringValue?: Value<string>;
}