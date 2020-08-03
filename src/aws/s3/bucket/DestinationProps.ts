import { Value } from '../../../kloudformation/Value';

export interface DestinationProps {
  bucketAccountId?: Value<string>
  bucketArn: Value<string>
  format: Value<string>
  prefix?: Value<string>
}