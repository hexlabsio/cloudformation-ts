import { Value } from '../../../kloudformation/Value';
import { ActionProps } from './ActionProps';

export function eventProps(eventPropsProps: EventProps): EventProps { return (eventPropsProps) as unknown as EventProps }

export interface EventProps {
    condition?: Value<string>;
    actions?: ActionProps[];
    eventName?: Value<string>;
}