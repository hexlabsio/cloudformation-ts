import { DestinationProps } from './DestinationProps';
import { Value } from '../../../kloudformation/Value';

export interface InventoryConfigurationProps {
  destination: DestinationProps
  enabled: Value<boolean>
  id: Value<string>
  includedObjectVersions: Value<string>
  optionalFields?: Value<Value<string>[]>
  prefix?: Value<string>
  scheduleFrequency: Value<string>
}