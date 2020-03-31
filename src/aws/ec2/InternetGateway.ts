import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type InternetGatewayAttributes = {  }
export function internetGateway(internetGatewayProps: InternetGateway): InternetGateway & { attributes: InternetGatewayAttributes } { return ({ ...internetGatewayProps, _logicalType: 'AWS::EC2::InternetGateway', attributes: {  } }) }

export interface InternetGateway extends KloudResource {
    tags?: Tag[];
}