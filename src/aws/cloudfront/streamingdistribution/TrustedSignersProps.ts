import { Value } from '../../../kloudformation/Value';

export interface TrustedSignersProps {
  enabled: Value<boolean>
  awsAccountNumbers?: Value<Value<string>[]>
}