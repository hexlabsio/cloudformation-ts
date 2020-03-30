import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vpcLink(vpcLinkProps: VpcLink & { logicalName?: string }): VpcLink { return ({ ...vpcLinkProps, _logicalType: 'AWS::ApiGateway::VpcLink' }) as unknown as VpcLink }

export interface VpcLink extends KloudResource {
    targetArns: Value<Value<string>[]>;
    name: Value<string>;
    description?: Value<string>;
}