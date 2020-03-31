import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type StackFleetAssociationAttributes = {  }
export function stackFleetAssociation(stackFleetAssociationProps: StackFleetAssociation): StackFleetAssociation & { attributes: StackFleetAssociationAttributes } { return ({ ...stackFleetAssociationProps, _logicalType: 'AWS::AppStream::StackFleetAssociation', attributes: {  } }) }

export interface StackFleetAssociation extends KloudResource {
    fleetName: Value<string>;
    stackName: Value<string>;
}