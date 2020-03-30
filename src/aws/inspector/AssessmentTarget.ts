import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function assessmentTarget(assessmentTargetProps: AssessmentTarget & { logicalName?: string }): AssessmentTarget { return ({ ...assessmentTargetProps, _logicalType: 'AWS::Inspector::AssessmentTarget' }) as unknown as AssessmentTarget }

export interface AssessmentTarget extends KloudResource {
    assessmentTargetName?: Value<string>;
    resourceGroupArn?: Value<string>;
}