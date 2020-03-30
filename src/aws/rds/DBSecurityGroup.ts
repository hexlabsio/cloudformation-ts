import { IngressProps } from './dbsecuritygroup/IngressProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function dBSecurityGroup(dBSecurityGroupProps: DBSecurityGroup & { logicalName?: string }): DBSecurityGroup { return ({ ...dBSecurityGroupProps, _logicalType: 'AWS::RDS::DBSecurityGroup' }) as unknown as DBSecurityGroup }

export interface DBSecurityGroup extends KloudResource {
    dBSecurityGroupIngress: IngressProps[];
    groupDescription: Value<string>;
    eC2VpcId?: Value<string>;
    tags?: Tag[];
}