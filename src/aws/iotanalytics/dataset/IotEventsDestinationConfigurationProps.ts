import { Value } from '../../../kloudformation/Value';

export function iotEventsDestinationConfigurationProps(iotEventsDestinationConfigurationPropsProps: IotEventsDestinationConfigurationProps): IotEventsDestinationConfigurationProps { return (iotEventsDestinationConfigurationPropsProps) }

export interface IotEventsDestinationConfigurationProps {
    inputName: Value<string>;
    roleArn: Value<string>;
}