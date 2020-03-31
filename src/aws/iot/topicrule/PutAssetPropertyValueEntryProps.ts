import { AssetPropertyValueProps } from './AssetPropertyValueProps';
import { Value } from '../../../kloudformation/Value';

export function putAssetPropertyValueEntryProps(putAssetPropertyValueEntryPropsProps: PutAssetPropertyValueEntryProps): PutAssetPropertyValueEntryProps { return (putAssetPropertyValueEntryPropsProps) }

export interface PutAssetPropertyValueEntryProps {
    propertyValues: AssetPropertyValueProps[];
    assetId?: Value<string>;
    entryId?: Value<string>;
    propertyAlias?: Value<string>;
    propertyId?: Value<string>;
}