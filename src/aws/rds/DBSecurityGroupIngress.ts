import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBSecurityGroupIngress(dBSecurityGroupIngressProps: DBSecurityGroupIngress & { logicalName?: string }): DBSecurityGroupIngress { return ({ ...dBSecurityGroupIngressProps, _logicalType: 'AWS::RDS::DBSecurityGroupIngress' }) as unknown as DBSecurityGroupIngress }

export interface DBSecurityGroupIngress extends KloudResource {
    dBSecurityGroupName: Value<string>;
    cIDRIP?: Value<string>;
    eC2SecurityGroupId?: Value<string>;
    eC2SecurityGroupName?: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}