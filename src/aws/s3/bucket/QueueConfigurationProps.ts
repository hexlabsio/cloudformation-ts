import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export function queueConfigurationProps(queueConfigurationPropsProps: QueueConfigurationProps): QueueConfigurationProps { return (queueConfigurationPropsProps) }

export interface QueueConfigurationProps {
    event: Value<string>;
    queue: Value<string>;
    filter?: NotificationFilterProps;
}