import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function permission(permissionProps: Permission): Permission { return ({ ...permissionProps, _logicalType: '' }) }
  
export interface Permission extends KloudResource {
  action: Value<string>
  eventSourceToken?: Value<string>
  functionName: Value<string>
  principal: Value<string>
  sourceAccount?: Value<string>
  sourceArn?: Value<string>
}