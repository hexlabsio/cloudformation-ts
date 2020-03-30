import { Value } from '../../kloudformation/Value';
import { IdentityProviderDetailsProps } from './server/IdentityProviderDetailsProps';
import { EndpointDetailsProps } from './server/EndpointDetailsProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function server(serverProps: Server & { logicalName?: string }): Server { return ({ ...serverProps, _logicalType: 'AWS::Transfer::Server' }) as unknown as Server }

export interface Server extends KloudResource {
    loggingRole?: Value<string>;
    identityProviderDetails?: IdentityProviderDetailsProps;
    endpointType?: Value<string>;
    endpointDetails?: EndpointDetailsProps;
    identityProviderType?: Value<string>;
    tags?: Tag[];
}