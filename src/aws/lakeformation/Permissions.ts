import { DataLakePrincipalProps } from './permissions/DataLakePrincipalProps';
import { ResourceProps } from './permissions/ResourceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function permissions(permissionsProps: Permissions & { logicalName?: string }): Permissions { return ({ ...permissionsProps, _logicalType: 'AWS::LakeFormation::Permissions' }) as unknown as Permissions }

export interface Permissions extends KloudResource {
    dataLakePrincipal: DataLakePrincipalProps;
    resource: ResourceProps;
    permissions?: Value<Value<string>[]>;
    permissionsWithGrantOption?: Value<Value<string>[]>;
}