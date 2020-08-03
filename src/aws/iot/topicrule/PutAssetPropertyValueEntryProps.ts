import { Value } from '../../../kloudformation/Value';
import { AssetPropertyValueProps } from './AssetPropertyValueProps';

export interface PutAssetPropertyValueEntryProps {
  assetId?: Value<string>
  entryId?: Value<string>
  propertyAlias?: Value<string>
  propertyId?: Value<string>
  propertyValues: AssetPropertyValueProps[]
}