import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function vPC(vPCProps: VPC & { logicalName?: string }): VPC { return ({ ...vPCProps, _logicalType: 'AWS::EC2::VPC' }) as unknown as VPC }

export interface VPC extends KloudResource {
    cidrBlock: Value<string>;
    enableDnsHostnames?: Value<boolean>;
    enableDnsSupport?: Value<boolean>;
    instanceTenancy?: Value<string>;
    tags?: Tag[];
}