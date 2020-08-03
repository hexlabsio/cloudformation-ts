import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function internetGateway(internetGatewayProps: InternetGateway): InternetGateway { return ({ ...internetGatewayProps, _logicalType: '' }) }
  
export interface InternetGateway extends KloudResource {
  tags?: Tag[]
}