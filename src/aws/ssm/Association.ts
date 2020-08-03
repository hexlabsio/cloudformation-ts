import { Value } from '../../kloudformation/Value';
import { TargetProps } from './association/TargetProps';
import { InstanceAssociationOutputLocationProps } from './association/InstanceAssociationOutputLocationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AssociationAttributes = { AssociationId: Attribute<string> }
export function association(associationProps: Association): Association & {attributes: AssociationAttributes} { return ({ ...associationProps, _logicalType: 'AWS::SSM::Association', attributes: { AssociationId: 'AssociationId' } }) }
   
export interface Association extends KloudResource {
  associationName?: Value<string>
  documentVersion?: Value<string>
  instanceId?: Value<string>
  name: Value<string>
  parameters?: { [key: string]: any[] }
  scheduleExpression?: Value<string>
  targets?: TargetProps[]
  outputLocation?: InstanceAssociationOutputLocationProps
  automationTargetParameterName?: Value<string>
  maxErrors?: Value<string>
  maxConcurrency?: Value<string>
  complianceSeverity?: Value<string>
  syncCompliance?: Value<string>
  waitForSuccessTimeoutSeconds?: Value<number>
  applyOnlyAtCronInterval?: Value<boolean>
}