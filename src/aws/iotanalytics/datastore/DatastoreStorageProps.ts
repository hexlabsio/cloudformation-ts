import { CustomerManagedS3Props } from './CustomerManagedS3Props';
import { ServiceManagedS3Props } from './ServiceManagedS3Props';

export function datastoreStorageProps(datastoreStoragePropsProps: DatastoreStorageProps): DatastoreStorageProps { return (datastoreStoragePropsProps) }

export interface DatastoreStorageProps {
    customerManagedS3?: CustomerManagedS3Props;
    serviceManagedS3?: ServiceManagedS3Props;
}