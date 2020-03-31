import { Value } from '../../kloudformation/Value';
import { AccelerationSettingsProps } from './jobtemplate/AccelerationSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type JobTemplateAttributes = { Arn: Attribute<string>; Name: Attribute<string> }
export function jobTemplate(jobTemplateProps: JobTemplate): JobTemplate & { attributes: JobTemplateAttributes } { return ({ ...jobTemplateProps, _logicalType: 'AWS::MediaConvert::JobTemplate', attributes: { Arn: 'Arn', Name: 'Name' } }) }

export interface JobTemplate extends KloudResource {
    settingsJson: Value<any>;
    category?: Value<string>;
    description?: Value<string>;
    accelerationSettings?: AccelerationSettingsProps;
    priority?: Value<number>;
    statusUpdateInterval?: Value<string>;
    queue?: Value<string>;
    tags?: Value<any>;
    name?: Value<string>;
}