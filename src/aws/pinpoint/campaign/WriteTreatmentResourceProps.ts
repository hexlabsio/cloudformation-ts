import { Value } from '../../../kloudformation/Value';
import { MessageConfigurationProps } from './MessageConfigurationProps';
import { ScheduleProps } from './ScheduleProps';

export function writeTreatmentResourceProps(writeTreatmentResourcePropsProps: WriteTreatmentResourceProps): WriteTreatmentResourceProps { return (writeTreatmentResourcePropsProps) }

export interface WriteTreatmentResourceProps {
    treatmentDescription?: Value<string>;
    messageConfiguration?: MessageConfigurationProps;
    schedule?: ScheduleProps;
    sizePercent?: Value<number>;
    treatmentName?: Value<string>;
}