import { CustomerManagedS3Props } from './CustomerManagedS3Props';
import { ServiceManagedS3Props } from './ServiceManagedS3Props';

export function channelStorageProps(channelStoragePropsProps: ChannelStorageProps): ChannelStorageProps { return (channelStoragePropsProps) }

export interface ChannelStorageProps {
    customerManagedS3?: CustomerManagedS3Props;
    serviceManagedS3?: ServiceManagedS3Props;
}