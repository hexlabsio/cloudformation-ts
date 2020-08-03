import { Value } from '../../../kloudformation/Value';

export interface AliasTargetProps {
  dNSName: Value<string>
  evaluateTargetHealth?: Value<boolean>
  hostedZoneId: Value<string>
}