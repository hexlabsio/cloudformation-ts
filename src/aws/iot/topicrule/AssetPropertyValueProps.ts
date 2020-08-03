import { Value } from '../../../kloudformation/Value';
import { AssetPropertyTimestampProps } from './AssetPropertyTimestampProps';
import { AssetPropertyVariantProps } from './AssetPropertyVariantProps';

export interface AssetPropertyValueProps {
  quality?: Value<string>
  timestamp: AssetPropertyTimestampProps
  value: AssetPropertyVariantProps
}