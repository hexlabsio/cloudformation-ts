import { Value } from '../../../kloudformation/Value';
import { QuietTimeProps } from './QuietTimeProps';
import { CampaignEventFilterProps } from './CampaignEventFilterProps';

export function scheduleProps(schedulePropsProps: ScheduleProps): ScheduleProps { return (schedulePropsProps) as unknown as ScheduleProps }

export interface ScheduleProps {
    timeZone?: Value<string>;
    quietTime?: QuietTimeProps;
    endTime?: Value<string>;
    startTime?: Value<string>;
    frequency?: Value<string>;
    eventFilter?: CampaignEventFilterProps;
    isLocalTime?: Value<boolean>;
}