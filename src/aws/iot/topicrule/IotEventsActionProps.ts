import { Value } from '../../../kloudformation/Value';

export function iotEventsActionProps(iotEventsActionPropsProps: IotEventsActionProps): IotEventsActionProps { return (iotEventsActionPropsProps) }

export interface IotEventsActionProps {
    inputName: Value<string>;
    roleArn: Value<string>;
    messageId?: Value<string>;
}