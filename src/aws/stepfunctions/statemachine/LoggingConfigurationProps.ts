import { Value } from '../../../kloudformation/Value';
import { LogDestinationProps } from './LogDestinationProps';

export interface LoggingConfigurationProps {
  includeExecutionData?: Value<boolean>
  destinations?: LogDestinationProps[]
  level?: Value<string>
}