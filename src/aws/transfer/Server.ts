import { Value } from '../../kloudformation/Value';
import { ProtocolProps } from './server/ProtocolProps';
import { IdentityProviderDetailsProps } from './server/IdentityProviderDetailsProps';
import { EndpointDetailsProps } from './server/EndpointDetailsProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ServerAttributes = { ServerId: Attribute<string>;Arn: Attribute<string> }
export function server(serverProps: Server): Server & {attributes: ServerAttributes} { return ({ ...serverProps, _logicalType: 'AWS::Transfer::Server', attributes: { ServerId: 'ServerId',Arn: 'Arn' } }) }
   
export interface Server extends KloudResource {
  loggingRole?: Value<string>
  protocols?: ProtocolProps[]
  identityProviderDetails?: IdentityProviderDetailsProps
  endpointType?: Value<string>
  endpointDetails?: EndpointDetailsProps
  identityProviderType?: Value<string>
  tags?: Tag[]
  certificate?: Value<string>
}