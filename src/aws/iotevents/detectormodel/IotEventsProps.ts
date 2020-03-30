import { Value } from '../../../kloudformation/Value';

export function iotEventsProps(iotEventsPropsProps: IotEventsProps): IotEventsProps { return (iotEventsPropsProps) as unknown as IotEventsProps }

export interface IotEventsProps {
    inputName?: Value<string>;
}