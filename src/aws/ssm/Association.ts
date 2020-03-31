import { Value } from '../../kloudformation/Value';
import { InstanceAssociationOutputLocationProps } from './association/InstanceAssociationOutputLocationProps';
import { ParameterValuesProps } from './association/ParameterValuesProps';
import { TargetProps } from './association/TargetProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type AssociationAttributes = {  }
export function association(associationProps: Association): Association & { attributes: AssociationAttributes } { return ({ ...associationProps, _logicalType: 'AWS::SSM::Association', attributes: {  } }) }

export interface Association extends KloudResource {
    name: Value<string>;
    associationName?: Value<string>;
    documentVersion?: Value<string>;
    instanceId?: Value<string>;
    outputLocation?: InstanceAssociationOutputLocationProps;
    parameters?: ParameterValuesProps[];
    scheduleExpression?: Value<string>;
    targets?: TargetProps[];
}