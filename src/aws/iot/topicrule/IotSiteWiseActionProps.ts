import { PutAssetPropertyValueEntryProps } from './PutAssetPropertyValueEntryProps';
import { Value } from '../../../kloudformation/Value';

export function iotSiteWiseActionProps(iotSiteWiseActionPropsProps: IotSiteWiseActionProps): IotSiteWiseActionProps { return (iotSiteWiseActionPropsProps) }

export interface IotSiteWiseActionProps {
    putAssetPropertyValueEntries: PutAssetPropertyValueEntryProps[];
    roleArn: Value<string>;
}