import { DataLakePrincipalProps } from './permissions/DataLakePrincipalProps';
import { ResourceProps } from './permissions/ResourceProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function permissions(permissionsProps: Permissions): Permissions { return ({ ...permissionsProps, _logicalType: '' }) }
  
export interface Permissions extends KloudResource {
  dataLakePrincipal: DataLakePrincipalProps
  resource: ResourceProps
  permissions?: Value<Value<string>[]>
  permissionsWithGrantOption?: Value<Value<string>[]>
}