import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type RegistryPolicyAttributes = { Id: Attribute<string> }
export function registryPolicy(registryPolicyProps: RegistryPolicy): RegistryPolicy & {attributes: RegistryPolicyAttributes} { return ({ ...registryPolicyProps, _logicalType: 'AWS::EventSchemas::RegistryPolicy', attributes: { Id: 'Id' } }) }
   
export interface RegistryPolicy extends KloudResource {
  policy: Value<any>
  registryName: Value<string>
  revisionId?: Value<string>
}