import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function permission(permissionProps: Permission & { logicalName?: string }): Permission { return ({ ...permissionProps, _logicalType: 'AWS::Lambda::Permission' }) as unknown as Permission }

export interface Permission extends KloudResource {
    action: Value<string>;
    functionName: Value<string>;
    principal: Value<string>;
    eventSourceToken?: Value<string>;
    sourceAccount?: Value<string>;
    sourceArn?: Value<string>;
}