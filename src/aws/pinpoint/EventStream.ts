import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function eventStream(eventStreamProps: EventStream & { logicalName?: string }): EventStream { return ({ ...eventStreamProps, _logicalType: 'AWS::Pinpoint::EventStream' }) as unknown as EventStream }

export interface EventStream extends KloudResource {
    applicationId: Value<string>;
    destinationStreamArn: Value<string>;
    roleArn: Value<string>;
}