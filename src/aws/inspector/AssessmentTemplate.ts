import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type AssessmentTemplateAttributes = { Arn: Attribute<string> }
export function assessmentTemplate(assessmentTemplateProps: AssessmentTemplate): AssessmentTemplate & {attributes: AssessmentTemplateAttributes} { return ({ ...assessmentTemplateProps, _logicalType: 'AWS::Inspector::AssessmentTemplate', attributes: { Arn: 'Arn' } }) }
   
export interface AssessmentTemplate extends KloudResource {
  assessmentTargetArn: Value<string>
  durationInSeconds: Value<number>
  assessmentTemplateName?: Value<string>
  rulesPackageArns: Value<Value<string>[]>
  userAttributesForFindings?: Tag[]
}