import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function placement(placementProps: Placement & { logicalName?: string }): Placement { return ({ ...placementProps, _logicalType: 'AWS::IoT1Click::Placement' }) as unknown as Placement }

export interface Placement extends KloudResource {
    projectName: Value<string>;
    placementName?: Value<string>;
    associatedDevices?: Value<any>;
    attributes?: Value<any>;
}