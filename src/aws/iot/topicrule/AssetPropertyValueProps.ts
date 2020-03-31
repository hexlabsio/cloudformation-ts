import { AssetPropertyTimestampProps } from './AssetPropertyTimestampProps';
import { AssetPropertyVariantProps } from './AssetPropertyVariantProps';
import { Value } from '../../../kloudformation/Value';

export function assetPropertyValueProps(assetPropertyValuePropsProps: AssetPropertyValueProps): AssetPropertyValueProps { return (assetPropertyValuePropsProps) }

export interface AssetPropertyValueProps {
    timestamp: AssetPropertyTimestampProps;
    value: AssetPropertyVariantProps;
    quality?: Value<string>;
}