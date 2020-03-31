import { Value } from '../../../kloudformation/Value';
import { CloudWatchDestinationProps } from './CloudWatchDestinationProps';
import { KinesisFirehoseDestinationProps } from './KinesisFirehoseDestinationProps';

export function eventDestinationProps(eventDestinationPropsProps: EventDestinationProps): EventDestinationProps { return (eventDestinationPropsProps) }

export interface EventDestinationProps {
    matchingEventTypes: Value<Value<string>[]>;
    cloudWatchDestination?: CloudWatchDestinationProps;
    enabled?: Value<boolean>;
    name?: Value<string>;
    kinesisFirehoseDestination?: KinesisFirehoseDestinationProps;
}