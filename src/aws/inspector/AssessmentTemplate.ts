import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type AssessmentTemplateAttributes = { Arn: Attribute<string> }
export function assessmentTemplate(assessmentTemplateProps: AssessmentTemplate): AssessmentTemplate & { attributes: AssessmentTemplateAttributes } { return ({ ...assessmentTemplateProps, _logicalType: 'AWS::Inspector::AssessmentTemplate', attributes: { Arn: 'Arn' } }) }

export interface AssessmentTemplate extends KloudResource {
    assessmentTargetArn: Value<string>;
    durationInSeconds: Value<number>;
    rulesPackageArns: Value<Value<string>[]>;
    assessmentTemplateName?: Value<string>;
    userAttributesForFindings?: Tag[];
}