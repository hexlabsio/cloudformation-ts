import { Value } from '../../../kloudformation/Value';
import { NotificationFilterProps } from './NotificationFilterProps';

export interface LambdaConfigurationProps {
  event: Value<string>
  filter?: NotificationFilterProps
  function: Value<string>
}