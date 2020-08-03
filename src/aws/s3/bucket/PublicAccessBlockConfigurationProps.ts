import { Value } from '../../../kloudformation/Value';

export interface PublicAccessBlockConfigurationProps {
  blockPublicAcls?: Value<boolean>
  blockPublicPolicy?: Value<boolean>
  ignorePublicAcls?: Value<boolean>
  restrictPublicBuckets?: Value<boolean>
}