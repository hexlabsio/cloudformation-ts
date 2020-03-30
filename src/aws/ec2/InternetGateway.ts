import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function internetGateway(internetGatewayProps: InternetGateway & { logicalName?: string }): InternetGateway { return ({ ...internetGatewayProps, _logicalType: 'AWS::EC2::InternetGateway' }) as unknown as InternetGateway }

export interface InternetGateway extends KloudResource {
    tags?: Tag[];
}