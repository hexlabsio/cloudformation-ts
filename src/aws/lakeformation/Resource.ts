import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function resource(resourceProps: Resource): Resource { return ({ ...resourceProps, _logicalType: '' }) }
  
export interface Resource extends KloudResource {
  resourceArn: Value<string>
  useServiceLinkedRole: Value<boolean>
  roleArn?: Value<string>
}