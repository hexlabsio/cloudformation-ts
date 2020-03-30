import { Value } from '../../../kloudformation/Value';

export function iotTopicPublishProps(iotTopicPublishPropsProps: IotTopicPublishProps): IotTopicPublishProps { return (iotTopicPublishPropsProps) as unknown as IotTopicPublishProps }

export interface IotTopicPublishProps {
    mqttTopic?: Value<string>;
}