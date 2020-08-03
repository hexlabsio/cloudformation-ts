import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ConnectionAttributes = { ConnectionArn: Attribute<string>;ConnectionStatus: Attribute<string>;OwnerAccountId: Attribute<string> }
export function connection(connectionProps: Connection): Connection & {attributes: ConnectionAttributes} { return ({ ...connectionProps, _logicalType: 'AWS::CodeStarConnections::Connection', attributes: { ConnectionArn: 'ConnectionArn',ConnectionStatus: 'ConnectionStatus',OwnerAccountId: 'OwnerAccountId' } }) }
   
export interface Connection extends KloudResource {
  connectionName: Value<string>
  providerType?: Value<string>
  hostArn?: Value<string>
  tags?: Tag[]
}