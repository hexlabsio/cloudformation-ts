import { Value } from '../../../kloudformation/Value';
import { SetDimensionProps } from './SetDimensionProps';

export function eventDimensionsProps(eventDimensionsPropsProps: EventDimensionsProps): EventDimensionsProps { return (eventDimensionsPropsProps) }

export interface EventDimensionsProps {
    metrics?: Value<any>;
    eventType?: SetDimensionProps;
    attributes?: Value<any>;
}