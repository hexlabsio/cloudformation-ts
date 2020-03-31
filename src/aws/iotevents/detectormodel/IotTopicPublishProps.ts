import { Value } from '../../../kloudformation/Value';

export function iotTopicPublishProps(iotTopicPublishPropsProps: IotTopicPublishProps): IotTopicPublishProps { return (iotTopicPublishPropsProps) }

export interface IotTopicPublishProps {
    mqttTopic?: Value<string>;
}