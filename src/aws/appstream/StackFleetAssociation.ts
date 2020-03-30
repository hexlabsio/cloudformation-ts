import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function stackFleetAssociation(stackFleetAssociationProps: StackFleetAssociation & { logicalName?: string }): StackFleetAssociation { return ({ ...stackFleetAssociationProps, _logicalType: 'AWS::AppStream::StackFleetAssociation' }) as unknown as StackFleetAssociation }

export interface StackFleetAssociation extends KloudResource {
    fleetName: Value<string>;
    stackName: Value<string>;
}