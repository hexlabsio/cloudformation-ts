import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PermissionAttributes = {  }
export function permission(permissionProps: Permission): Permission & { attributes: PermissionAttributes } { return ({ ...permissionProps, _logicalType: 'AWS::Lambda::Permission', attributes: {  } }) }

export interface Permission extends KloudResource {
    action: Value<string>;
    functionName: Value<string>;
    principal: Value<string>;
    eventSourceToken?: Value<string>;
    sourceAccount?: Value<string>;
    sourceArn?: Value<string>;
}