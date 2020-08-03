import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function layerVersionPermission(layerVersionPermissionProps: LayerVersionPermission): LayerVersionPermission { return ({ ...layerVersionPermissionProps, _logicalType: '' }) }
  
export interface LayerVersionPermission extends KloudResource {
  action: Value<string>
  layerVersionArn: Value<string>
  organizationId?: Value<string>
  principal: Value<string>
}