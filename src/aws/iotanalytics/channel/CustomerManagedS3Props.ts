import { Value } from '../../../kloudformation/Value';

export function customerManagedS3Props(customerManagedS3PropsProps: CustomerManagedS3Props): CustomerManagedS3Props { return (customerManagedS3PropsProps) as unknown as CustomerManagedS3Props }

export interface CustomerManagedS3Props {
    bucket: Value<string>;
    roleArn: Value<string>;
    keyPrefix?: Value<string>;
}