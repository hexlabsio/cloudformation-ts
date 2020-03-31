import { Value } from '../../../kloudformation/Value';

export function iotAnalyticsActionProps(iotAnalyticsActionPropsProps: IotAnalyticsActionProps): IotAnalyticsActionProps { return (iotAnalyticsActionPropsProps) }

export interface IotAnalyticsActionProps {
    channelName: Value<string>;
    roleArn: Value<string>;
}