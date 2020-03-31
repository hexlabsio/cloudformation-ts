import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EIPAssociationAttributes = {  }
export function eIPAssociation(eIPAssociationProps: EIPAssociation): EIPAssociation & { attributes: EIPAssociationAttributes } { return ({ ...eIPAssociationProps, _logicalType: 'AWS::EC2::EIPAssociation', attributes: {  } }) }

export interface EIPAssociation extends KloudResource {
    allocationId?: Value<string>;
    eIP?: Value<string>;
    instanceId?: Value<string>;
    networkInterfaceId?: Value<string>;
    privateIpAddress?: Value<string>;
}