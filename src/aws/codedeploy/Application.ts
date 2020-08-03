import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function application(applicationProps: Application): Application { return ({ ...applicationProps, _logicalType: '' }) }
  
export interface Application extends KloudResource {
  applicationName?: Value<string>
  computePlatform?: Value<string>
}