import { Value } from '../../kloudformation/Value';
import { DestinationConfigProps } from './eventsourcemapping/DestinationConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventSourceMappingAttributes = {  }
export function eventSourceMapping(eventSourceMappingProps: EventSourceMapping): EventSourceMapping & { attributes: EventSourceMappingAttributes } { return ({ ...eventSourceMappingProps, _logicalType: 'AWS::Lambda::EventSourceMapping', attributes: {  } }) }

export interface EventSourceMapping extends KloudResource {
    eventSourceArn: Value<string>;
    functionName: Value<string>;
    batchSize?: Value<number>;
    bisectBatchOnFunctionError?: Value<boolean>;
    destinationConfig?: DestinationConfigProps;
    enabled?: Value<boolean>;
    maximumBatchingWindowInSeconds?: Value<number>;
    maximumRecordAgeInSeconds?: Value<number>;
    maximumRetryAttempts?: Value<number>;
    parallelizationFactor?: Value<number>;
    startingPosition?: Value<string>;
}