import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function assessmentTemplate(assessmentTemplateProps: AssessmentTemplate & { logicalName?: string }): AssessmentTemplate { return ({ ...assessmentTemplateProps, _logicalType: 'AWS::Inspector::AssessmentTemplate' }) as unknown as AssessmentTemplate }

export interface AssessmentTemplate extends KloudResource {
    assessmentTargetArn: Value<string>;
    durationInSeconds: Value<number>;
    rulesPackageArns: Value<Value<string>[]>;
    assessmentTemplateName?: Value<string>;
    userAttributesForFindings?: Tag[];
}