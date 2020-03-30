import { Value } from '../../kloudformation/Value';
import { AccelerationSettingsProps } from './jobtemplate/AccelerationSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function jobTemplate(jobTemplateProps: JobTemplate & { logicalName?: string }): JobTemplate { return ({ ...jobTemplateProps, _logicalType: 'AWS::MediaConvert::JobTemplate' }) as unknown as JobTemplate }

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