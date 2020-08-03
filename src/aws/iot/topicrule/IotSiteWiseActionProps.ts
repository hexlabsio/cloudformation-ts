import { PutAssetPropertyValueEntryProps } from './PutAssetPropertyValueEntryProps';
import { Value } from '../../../kloudformation/Value';

export interface IotSiteWiseActionProps {
  putAssetPropertyValueEntries: PutAssetPropertyValueEntryProps[]
  roleArn: Value<string>
}