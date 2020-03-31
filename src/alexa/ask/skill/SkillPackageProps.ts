import { Value } from '../../../kloudformation/Value';
import { OverridesProps } from './OverridesProps';

export function skillPackageProps(skillPackagePropsProps: SkillPackageProps): SkillPackageProps { return (skillPackagePropsProps) }

export interface SkillPackageProps {
    s3Bucket: Value<string>;
    s3Key: Value<string>;
    s3BucketRole?: Value<string>;
    s3ObjectVersion?: Value<string>;
    overrides?: OverridesProps;
}