import { Value } from '../../kloudformation/Value';
import { ApplicationConfigurationProps } from './application/ApplicationConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function application(applicationProps: Application): Application { return ({ ...applicationProps, _logicalType: '' }) }
  
export interface Application extends KloudResource {
  applicationName?: Value<string>
  runtimeEnvironment: Value<string>
  applicationConfiguration?: ApplicationConfigurationProps
  applicationDescription?: Value<string>
  tags?: Tag[]
  serviceExecutionRole: Value<string>
}