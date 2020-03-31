import { ConnectionInputProps } from './connection/ConnectionInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ConnectionAttributes = {  }
export function connection(connectionProps: Connection): Connection & { attributes: ConnectionAttributes } { return ({ ...connectionProps, _logicalType: 'AWS::Glue::Connection', attributes: {  } }) }

export interface Connection extends KloudResource {
    connectionInput: ConnectionInputProps;
    catalogId: Value<string>;
}