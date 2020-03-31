import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type EventStreamAttributes = {  }
export function eventStream(eventStreamProps: EventStream): EventStream & { attributes: EventStreamAttributes } { return ({ ...eventStreamProps, _logicalType: 'AWS::Pinpoint::EventStream', attributes: {  } }) }

export interface EventStream extends KloudResource {
    applicationId: Value<string>;
    destinationStreamArn: Value<string>;
    roleArn: Value<string>;
}