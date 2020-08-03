import { Value } from '../../../kloudformation/Value';

export interface AwsOrganizationsSourceProps {
  organizationSourceType: Value<string>
  organizationalUnits?: Value<Value<string>[]>
}