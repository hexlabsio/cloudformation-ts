import { Value } from '../../kloudformation/Value';
import { DestinationConfigProps } from './eventinvokeconfig/DestinationConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventInvokeConfig(eventInvokeConfigProps: EventInvokeConfig & { logicalName?: string }): EventInvokeConfig { return ({ ...eventInvokeConfigProps, _logicalType: 'AWS::Lambda::EventInvokeConfig' }) as unknown as EventInvokeConfig }

export interface EventInvokeConfig extends KloudResource {
    functionName: Value<string>;
    qualifier: Value<string>;
    maximumRetryAttempts?: Value<number>;
    destinationConfig?: DestinationConfigProps;
    maximumEventAgeInSeconds?: Value<number>;
}