import { Value } from '../../../kloudformation/Value';

export function iotEventsDestinationConfigurationProps(iotEventsDestinationConfigurationPropsProps: IotEventsDestinationConfigurationProps): IotEventsDestinationConfigurationProps { return (iotEventsDestinationConfigurationPropsProps) as unknown as IotEventsDestinationConfigurationProps }

export interface IotEventsDestinationConfigurationProps {
    inputName: Value<string>;
    roleArn: Value<string>;
}