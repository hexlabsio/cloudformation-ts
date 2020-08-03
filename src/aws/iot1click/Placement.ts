import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type PlacementAttributes = { PlacementName: Attribute<string>;ProjectName: Attribute<string> }
export function placement(placementProps: Placement): Placement & {attributes: PlacementAttributes} { return ({ ...placementProps, _logicalType: 'AWS::IoT1Click::Placement', attributes: { PlacementName: 'PlacementName',ProjectName: 'ProjectName' } }) }
   
export interface Placement extends KloudResource {
  placementName?: Value<string>
  projectName: Value<string>
  associatedDevices?: Value<any>
  attributes?: Value<any>
}