import { Value } from '../../../kloudformation/Value';

export interface IotEventsDestinationConfigurationProps {
  inputName: Value<string>
  roleArn: Value<string>
}