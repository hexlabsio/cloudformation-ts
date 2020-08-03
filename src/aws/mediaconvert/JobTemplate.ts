import { Value } from '../../kloudformation/Value';
import { AccelerationSettingsProps } from './jobTemplate/AccelerationSettingsProps';
import { HopDestinationProps } from './jobTemplate/HopDestinationProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type JobTemplateAttributes = { Arn: Attribute<string>;Name: Attribute<string> }
export function jobTemplate(jobTemplateProps: JobTemplate): JobTemplate & {attributes: JobTemplateAttributes} { return ({ ...jobTemplateProps, _logicalType: 'AWS::MediaConvert::JobTemplate', attributes: { Arn: 'Arn',Name: 'Name' } }) }
   
export interface JobTemplate extends KloudResource {
  category?: Value<string>
  description?: Value<string>
  accelerationSettings?: AccelerationSettingsProps
  priority?: Value<number>
  statusUpdateInterval?: Value<string>
  settingsJson: Value<any>
  queue?: Value<string>
  hopDestinations?: HopDestinationProps[]
  tags?: Value<any>
  name?: Value<string>
}