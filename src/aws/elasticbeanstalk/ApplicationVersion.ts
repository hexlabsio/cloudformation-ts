import { Value } from '../../kloudformation/Value';
import { SourceBundleProps } from './applicationVersion/SourceBundleProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function applicationVersion(applicationVersionProps: ApplicationVersion): ApplicationVersion { return ({ ...applicationVersionProps, _logicalType: '' }) }
  
export interface ApplicationVersion extends KloudResource {
  applicationName: Value<string>
  description?: Value<string>
  sourceBundle: SourceBundleProps
}