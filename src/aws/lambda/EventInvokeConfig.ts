import { Value } from '../../kloudformation/Value';
import { DestinationConfigProps } from './eventInvokeConfig/DestinationConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eventInvokeConfig(eventInvokeConfigProps: EventInvokeConfig): EventInvokeConfig { return ({ ...eventInvokeConfigProps, _logicalType: '' }) }
  
export interface EventInvokeConfig extends KloudResource {
  functionName: Value<string>
  maximumRetryAttempts?: Value<number>
  destinationConfig?: DestinationConfigProps
  qualifier: Value<string>
  maximumEventAgeInSeconds?: Value<number>
}