import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type PlacementAttributes = { PlacementName: Attribute<string>; ProjectName: Attribute<string> }
export function placement(placementProps: Placement): Placement & { attributes: PlacementAttributes } { return ({ ...placementProps, _logicalType: 'AWS::IoT1Click::Placement', attributes: { PlacementName: 'PlacementName', ProjectName: 'ProjectName' } }) }

export interface Placement extends KloudResource {
    projectName: Value<string>;
    placementName?: Value<string>;
    associatedDevices?: Value<any>;
    attributes?: Value<any>;
}