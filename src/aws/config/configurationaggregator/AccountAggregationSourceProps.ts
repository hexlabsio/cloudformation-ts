import { Value } from '../../../kloudformation/Value';

export interface AccountAggregationSourceProps {
  allAwsRegions?: Value<boolean>
  awsRegions?: Value<Value<string>[]>
  accountIds: Value<Value<string>[]>
}