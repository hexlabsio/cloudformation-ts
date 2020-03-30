import { ConnectionInputProps } from './connection/ConnectionInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function connection(connectionProps: Connection & { logicalName?: string }): Connection { return ({ ...connectionProps, _logicalType: 'AWS::Glue::Connection' }) as unknown as Connection }

export interface Connection extends KloudResource {
    connectionInput: ConnectionInputProps;
    catalogId: Value<string>;
}