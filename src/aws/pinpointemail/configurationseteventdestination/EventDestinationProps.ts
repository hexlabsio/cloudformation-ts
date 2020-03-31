import { Value } from '../../../kloudformation/Value';
import { SnsDestinationProps } from './SnsDestinationProps';
import { CloudWatchDestinationProps } from '../../ses/configurationseteventdestination/CloudWatchDestinationProps';
import { PinpointDestinationProps } from './PinpointDestinationProps';
import { KinesisFirehoseDestinationProps } from '../../ses/configurationseteventdestination/KinesisFirehoseDestinationProps';

export function eventDestinationProps(eventDestinationPropsProps: EventDestinationProps): EventDestinationProps { return (eventDestinationPropsProps) }

export interface EventDestinationProps {
    matchingEventTypes: Value<Value<string>[]>;
    snsDestination?: SnsDestinationProps;
    cloudWatchDestination?: CloudWatchDestinationProps;
    enabled?: Value<boolean>;
    pinpointDestination?: PinpointDestinationProps;
    kinesisFirehoseDestination?: KinesisFirehoseDestinationProps;
}