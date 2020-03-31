import { DataLakePrincipalProps } from './permissions/DataLakePrincipalProps';
import { ResourceProps } from './permissions/ResourceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type PermissionsAttributes = {  }
export function permissions(permissionsProps: Permissions): Permissions & { attributes: PermissionsAttributes } { return ({ ...permissionsProps, _logicalType: 'AWS::LakeFormation::Permissions', attributes: {  } }) }

export interface Permissions extends KloudResource {
    dataLakePrincipal: DataLakePrincipalProps;
    resource: ResourceProps;
    permissions?: Value<Value<string>[]>;
    permissionsWithGrantOption?: Value<Value<string>[]>;
}