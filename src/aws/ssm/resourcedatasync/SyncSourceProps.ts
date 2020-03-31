import { Value } from '../../../kloudformation/Value';
import { AwsOrganizationsSourceProps } from './AwsOrganizationsSourceProps';

export function syncSourceProps(syncSourcePropsProps: SyncSourceProps): SyncSourceProps { return (syncSourcePropsProps) }

export interface SyncSourceProps {
    sourceType: Value<string>;
    sourceRegions: Value<Value<string>[]>;
    awsOrganizationsSource?: AwsOrganizationsSourceProps;
    includeFutureRegions?: Value<boolean>;
}