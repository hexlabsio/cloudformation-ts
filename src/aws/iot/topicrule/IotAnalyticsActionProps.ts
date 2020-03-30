import { Value } from '../../../kloudformation/Value';

export function iotAnalyticsActionProps(iotAnalyticsActionPropsProps: IotAnalyticsActionProps): IotAnalyticsActionProps { return (iotAnalyticsActionPropsProps) as unknown as IotAnalyticsActionProps }

export interface IotAnalyticsActionProps {
    channelName: Value<string>;
    roleArn: Value<string>;
}