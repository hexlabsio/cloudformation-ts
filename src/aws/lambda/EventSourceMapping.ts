import { Value } from '../../kloudformation/Value';
import { DestinationConfigProps } from './eventSourceMapping/DestinationConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function eventSourceMapping(eventSourceMappingProps: EventSourceMapping): EventSourceMapping { return ({ ...eventSourceMappingProps, _logicalType: '' }) }
  
export interface EventSourceMapping extends KloudResource {
  batchSize?: Value<number>
  bisectBatchOnFunctionError?: Value<boolean>
  destinationConfig?: DestinationConfigProps
  enabled?: Value<boolean>
  eventSourceArn: Value<string>
  functionName: Value<string>
  maximumBatchingWindowInSeconds?: Value<number>
  maximumRecordAgeInSeconds?: Value<number>
  maximumRetryAttempts?: Value<number>
  parallelizationFactor?: Value<number>
  startingPosition?: Value<string>
}