import { SelectAttributesProps } from './SelectAttributesProps';
import { DatastoreProps } from './DatastoreProps';
import { FilterProps } from './FilterProps';
import { AddAttributesProps } from './AddAttributesProps';
import { ChannelProps } from './ChannelProps';
import { DeviceShadowEnrichProps } from './DeviceShadowEnrichProps';
import { MathProps } from './MathProps';
import { LambdaProps } from './LambdaProps';
import { DeviceRegistryEnrichProps } from './DeviceRegistryEnrichProps';
import { RemoveAttributesProps } from './RemoveAttributesProps';

export function activityProps(activityPropsProps: ActivityProps): ActivityProps { return (activityPropsProps) }

export interface ActivityProps {
    selectAttributes?: SelectAttributesProps;
    datastore?: DatastoreProps;
    filter?: FilterProps;
    addAttributes?: AddAttributesProps;
    channel?: ChannelProps;
    deviceShadowEnrich?: DeviceShadowEnrichProps;
    math?: MathProps;
    lambda?: LambdaProps;
    deviceRegistryEnrich?: DeviceRegistryEnrichProps;
    removeAttributes?: RemoveAttributesProps;
}