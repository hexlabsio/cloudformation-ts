import { IngressProps } from './dbsecuritygroup/IngressProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DBSecurityGroupAttributes = {  }
export function dBSecurityGroup(dBSecurityGroupProps: DBSecurityGroup): DBSecurityGroup & { attributes: DBSecurityGroupAttributes } { return ({ ...dBSecurityGroupProps, _logicalType: 'AWS::RDS::DBSecurityGroup', attributes: {  } }) }

export interface DBSecurityGroup extends KloudResource {
    dBSecurityGroupIngress: IngressProps[];
    groupDescription: Value<string>;
    eC2VpcId?: Value<string>;
    tags?: Tag[];
}