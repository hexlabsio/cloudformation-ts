import { Value } from '../../../kloudformation/Value';
import { AssetPropertyVariantProps } from './AssetPropertyVariantProps';
import { AssetPropertyTimestampProps } from './AssetPropertyTimestampProps';

export interface AssetPropertyValueProps {
  quality?: Value<string>
  value?: AssetPropertyVariantProps
  timestamp?: AssetPropertyTimestampProps
}