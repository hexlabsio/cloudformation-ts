import { Value } from '../../../kloudformation/Value';

export interface PublicAccessBlockConfigurationProps {
  blockPublicAcls?: Value<boolean>
  ignorePublicAcls?: Value<boolean>
  blockPublicPolicy?: Value<boolean>
  restrictPublicBuckets?: Value<boolean>
}