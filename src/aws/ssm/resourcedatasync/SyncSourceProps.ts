import { Value } from '../../../kloudformation/Value';
import { AwsOrganizationsSourceProps } from './AwsOrganizationsSourceProps';

export interface SyncSourceProps {
  sourceType: Value<string>
  awsOrganizationsSource?: AwsOrganizationsSourceProps
  includeFutureRegions?: Value<boolean>
  sourceRegions: Value<Value<string>[]>
}