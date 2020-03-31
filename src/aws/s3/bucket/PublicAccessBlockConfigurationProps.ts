import { Value } from '../../../kloudformation/Value';

export function publicAccessBlockConfigurationProps(publicAccessBlockConfigurationPropsProps: PublicAccessBlockConfigurationProps): PublicAccessBlockConfigurationProps { return (publicAccessBlockConfigurationPropsProps) }

export interface PublicAccessBlockConfigurationProps {
    blockPublicAcls?: Value<boolean>;
    blockPublicPolicy?: Value<boolean>;
    ignorePublicAcls?: Value<boolean>;
    restrictPublicBuckets?: Value<boolean>;
}