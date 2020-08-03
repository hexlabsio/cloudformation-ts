import { Value } from '../../../kloudformation/Value';
import { AssetPropertyValueProps } from './AssetPropertyValueProps';

export interface IotSiteWiseProps {
  entryId?: Value<string>
  propertyAlias?: Value<string>
  propertyValue?: AssetPropertyValueProps
  assetId?: Value<string>
  propertyId?: Value<string>
}