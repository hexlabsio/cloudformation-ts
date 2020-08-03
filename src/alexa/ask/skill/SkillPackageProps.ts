import { Value } from '../../../kloudformation/Value';
import { OverridesProps } from './OverridesProps';

export interface SkillPackageProps {
  s3BucketRole?: Value<string>
  s3ObjectVersion?: Value<string>
  s3Bucket: Value<string>
  s3Key: Value<string>
  overrides?: OverridesProps
}