import { ConnectionInputProps } from './connection/ConnectionInputProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function connection(connectionProps: Connection): Connection { return ({ ...connectionProps, _logicalType: '' }) }
  
export interface Connection extends KloudResource {
  connectionInput: ConnectionInputProps
  catalogId: Value<string>
}