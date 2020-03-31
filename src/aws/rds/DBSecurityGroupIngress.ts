import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBSecurityGroupIngressAttributes = {  }
export function dBSecurityGroupIngress(dBSecurityGroupIngressProps: DBSecurityGroupIngress): DBSecurityGroupIngress & { attributes: DBSecurityGroupIngressAttributes } { return ({ ...dBSecurityGroupIngressProps, _logicalType: 'AWS::RDS::DBSecurityGroupIngress', attributes: {  } }) }

export interface DBSecurityGroupIngress extends KloudResource {
    dBSecurityGroupName: Value<string>;
    cIDRIP?: Value<string>;
    eC2SecurityGroupId?: Value<string>;
    eC2SecurityGroupName?: Value<string>;
    eC2SecurityGroupOwnerId?: Value<string>;
}