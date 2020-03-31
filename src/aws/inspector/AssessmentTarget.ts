import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AssessmentTargetAttributes = { Arn: Attribute<string> }
export function assessmentTarget(assessmentTargetProps: AssessmentTarget): AssessmentTarget & { attributes: AssessmentTargetAttributes } { return ({ ...assessmentTargetProps, _logicalType: 'AWS::Inspector::AssessmentTarget', attributes: { Arn: 'Arn' } }) }

export interface AssessmentTarget extends KloudResource {
    assessmentTargetName?: Value<string>;
    resourceGroupArn?: Value<string>;
}