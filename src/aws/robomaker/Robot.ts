import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function robot(robotProps: Robot): Robot { return ({ ...robotProps, _logicalType: '' }) }
  
export interface Robot extends KloudResource {
  fleet?: Value<string>
  architecture: Value<string>
  greengrassGroupId: Value<string>
  tags?: Value<any>
  name?: Value<string>
}