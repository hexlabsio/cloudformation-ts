import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LayerVersionPermissionAttributes = {  }
export function layerVersionPermission(layerVersionPermissionProps: LayerVersionPermission): LayerVersionPermission & { attributes: LayerVersionPermissionAttributes } { return ({ ...layerVersionPermissionProps, _logicalType: 'AWS::Lambda::LayerVersionPermission', attributes: {  } }) }

export interface LayerVersionPermission extends KloudResource {
    action: Value<string>;
    layerVersionArn: Value<string>;
    principal: Value<string>;
    organizationId?: Value<string>;
}