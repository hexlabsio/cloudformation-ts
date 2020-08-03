import { Value } from '../../../kloudformation/Value';
import { NetworkConfigurationProps } from './NetworkConfigurationProps';

export interface EcsParametersProps {
  group?: Value<string>
  launchType?: Value<string>
  networkConfiguration?: NetworkConfigurationProps
  platformVersion?: Value<string>
  taskCount?: Value<number>
  taskDefinitionArn: Value<string>
}