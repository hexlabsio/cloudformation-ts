import { Value } from '../../../kloudformation/Value';

export function versioningConfigurationProps(versioningConfigurationPropsProps: VersioningConfigurationProps): VersioningConfigurationProps { return (versioningConfigurationPropsProps) as unknown as VersioningConfigurationProps }

export interface VersioningConfigurationProps {
    status: Value<string>;
}