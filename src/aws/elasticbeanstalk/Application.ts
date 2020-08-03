import { Value } from '../../kloudformation/Value';
import { ApplicationResourceLifecycleConfigProps } from './application/ApplicationResourceLifecycleConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function application(applicationProps: Application): Application { return ({ ...applicationProps, _logicalType: '' }) }
  
export interface Application extends KloudResource {
  applicationName?: Value<string>
  description?: Value<string>
  resourceLifecycleConfig?: ApplicationResourceLifecycleConfigProps
}