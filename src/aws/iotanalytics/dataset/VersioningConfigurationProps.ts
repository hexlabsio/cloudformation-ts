import { Value } from '../../../kloudformation/Value';

export interface VersioningConfigurationProps {
  maxVersions?: Value<number>
  unlimited?: Value<boolean>
}