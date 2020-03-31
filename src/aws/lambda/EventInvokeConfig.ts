import { Value } from '../../kloudformation/Value';
import { DestinationConfigProps } from './eventinvokeconfig/DestinationConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventInvokeConfigAttributes = {  }
export function eventInvokeConfig(eventInvokeConfigProps: EventInvokeConfig): EventInvokeConfig & { attributes: EventInvokeConfigAttributes } { return ({ ...eventInvokeConfigProps, _logicalType: 'AWS::Lambda::EventInvokeConfig', attributes: {  } }) }

export interface EventInvokeConfig extends KloudResource {
    functionName: Value<string>;
    qualifier: Value<string>;
    maximumRetryAttempts?: Value<number>;
    destinationConfig?: DestinationConfigProps;
    maximumEventAgeInSeconds?: Value<number>;
}