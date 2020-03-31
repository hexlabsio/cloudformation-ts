import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ConnectionAttributes = { ConnectionArn: Attribute<string>; ConnectionStatus: Attribute<string>; OwnerAccountId: Attribute<string> }
export function connection(connectionProps: Connection): Connection & { attributes: ConnectionAttributes } { return ({ ...connectionProps, _logicalType: 'AWS::CodeStarConnections::Connection', attributes: { ConnectionArn: 'ConnectionArn', ConnectionStatus: 'ConnectionStatus', OwnerAccountId: 'OwnerAccountId' } }) }

export interface Connection extends KloudResource {
    connectionName: Value<string>;
    providerType: Value<string>;
}