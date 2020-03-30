import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function layerVersionPermission(layerVersionPermissionProps: LayerVersionPermission & { logicalName?: string }): LayerVersionPermission { return ({ ...layerVersionPermissionProps, _logicalType: 'AWS::Lambda::LayerVersionPermission' }) as unknown as LayerVersionPermission }

export interface LayerVersionPermission extends KloudResource {
    action: Value<string>;
    layerVersionArn: Value<string>;
    principal: Value<string>;
    organizationId?: Value<string>;
}