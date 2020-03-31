import { Value } from '../../../kloudformation/Value';

export function versioningConfigurationProps(versioningConfigurationPropsProps: VersioningConfigurationProps): VersioningConfigurationProps { return (versioningConfigurationPropsProps) }

export interface VersioningConfigurationProps {
    status: Value<string>;
}