import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type VpcLinkAttributes = {  }
export function vpcLink(vpcLinkProps: VpcLink): VpcLink & { attributes: VpcLinkAttributes } { return ({ ...vpcLinkProps, _logicalType: 'AWS::ApiGateway::VpcLink', attributes: {  } }) }

export interface VpcLink extends KloudResource {
    targetArns: Value<Value<string>[]>;
    name: Value<string>;
    description?: Value<string>;
}