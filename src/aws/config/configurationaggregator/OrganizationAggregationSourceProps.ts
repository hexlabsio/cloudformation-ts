import { Value } from '../../../kloudformation/Value';

export interface OrganizationAggregationSourceProps {
  allAwsRegions?: Value<boolean>
  awsRegions?: Value<Value<string>[]>
  roleArn: Value<string>
}